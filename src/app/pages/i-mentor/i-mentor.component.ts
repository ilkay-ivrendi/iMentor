import {
  Component,
  ElementRef,
  Inject,
  PLATFORM_ID,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  DirectionalLight,
  HemisphereLight,
  Color
} from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-i-mentor',
  templateUrl: './i-mentor.component.html',
  styleUrl: './i-mentor.component.scss',
  standalone: true,
  imports: [MatCardModule]
})
export class IMentorComponent implements AfterViewInit {
  @ViewChild('canvasContainer') canvasRef!: ElementRef<HTMLDivElement>;
  private isBrowser: boolean;

  private scene!: Scene;
  private camera!: PerspectiveCamera;
  private renderer!: WebGLRenderer;
  private controls!: OrbitControls;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.initThreeScene();
    }
  }

  private initThreeScene(): void {
    // Scene & Camera
    this.scene = new Scene();
    this.scene.background = new Color(0x8fbcd4);

    this.camera = new PerspectiveCamera(
      75,
      this.canvasRef.nativeElement.clientWidth /
      this.canvasRef.nativeElement.clientHeight,
      0.1,
      1000
    );
    this.camera.position.set(0, 15, 5);

    // Renderer
    this.renderer = new WebGLRenderer({ antialias: true });
    this.renderer.setSize(
      this.canvasRef.nativeElement.clientWidth,
      this.canvasRef.nativeElement.clientHeight
    );
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.canvasRef.nativeElement.appendChild(this.renderer.domElement);

    // Lights
    const hemiLight = new HemisphereLight(0xffffff, 0x444444, 1.2);
    hemiLight.position.set(0, 20, 0);
    this.scene.add(hemiLight);

    const dirLight = new DirectionalLight(0xffffff, 1);
    dirLight.position.set(5, 20, 7.5);
    this.scene.add(dirLight);

    // Controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.target.set(0, 15, 0);
    this.controls.update();
    

    // Load GLTF model
    const loader = new GLTFLoader();
    loader.load('assets/models/mentor.glb', (gltf) => {
      const model = gltf.scene;
      model.scale.set(0.1, 0.1, 0.1);
      model.position.set(0, 0, 0);
      this.scene.add(model);
      console.log('Model is loaded and added to the scene.');
    });

    // Animate
    this.animate();
  }

  private animate(): void {
    requestAnimationFrame(() => this.animate());
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }
}
