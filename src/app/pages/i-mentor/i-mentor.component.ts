import {
  Component,
  ElementRef,
  Inject,
  PLATFORM_ID,
  ViewChild,
  AfterViewInit,
  OnInit
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
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
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ChatService } from '@core/services/chat.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MentorsService } from '@core/services/mentors.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-i-mentor',
  templateUrl: './i-mentor.component.html',
  styleUrl: './i-mentor.component.scss',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FlexLayoutModule, MatCardModule, MatButtonModule, MatIconModule]
})
export class IMentorComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  private isBrowser: boolean;

  private scene!: Scene;
  private camera!: PerspectiveCamera;
  private renderer!: WebGLRenderer;
  private controls!: OrbitControls;

  mentor: any;

  messageInput = new FormControl('');

  messages: any = [
    {
      sender: "assistant",
      content: "Hi! How can I help you today?"
    },
    {
      sender: "user",
      content: "What is your first name?"
    },
    {
      sender: "assistant",
      content: "Hi! How can I help you today?"
    },
    {
      sender: "user",
      content: "What is your first name?"
    }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: object, private chatService: ChatService, private mentorsService: MentorsService, private router: Router) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    this.mentorsService.mentor$.subscribe({
      next: (data) => this.mentor = data,
      error: (err) => console.error('Error loading mentor:', err)
    });

    if (!this.mentor) {
      this.mentor = {
        id: 46,
        name: "Ms Aurel",
        branch: "Mathematics",
        description: "An friendly mentor passionate about helping students understand complex concepts easily.",
        systemPrompt: "You are a brilliant and friendly mentor. Your name is Aurel. Explain problems clearly, encourage critical thinking, and guide learners through examples. Your answers are maximum 3 sentence",
        lessons: [
          "Algebra Basics",
          "Geometry Essentials",
          "Introduction to Calculus",
          "Probability and Statistics",
          "Problem-Solving Strategies"
        ],
        mentorAvatar: "http://localhost:8080/images/mentor-avatars/Dr._Alan_Carter.png",
        voiceIntroUrl: "http://localhost:8080/audio/mentor-intros/Dr._Alan_Carter.wav",
        voiceId: "p225"
      }
    }

  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.initThreeScene();
    }

  }

  ngOnDestroy(): void {
    if (this.isBrowser) {
      window.removeEventListener('resize', this.onResize.bind(this));
    }
  }

  private initThreeScene(): void {
    // Scene & Camera
    this.scene = new Scene();
    this.scene.background = new Color('#d65db1');

    this.camera = new PerspectiveCamera(
      75,
      this.canvasRef.nativeElement.clientWidth /
      this.canvasRef.nativeElement.clientHeight,
      0.1,
      1000
    );
    this.camera.position.set(0, 17, 8);

    // Use canvas container dimensions
    const container = this.canvasRef.nativeElement.parentElement!;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Renderer
    this.renderer = new WebGLRenderer({ canvas: this.canvasRef.nativeElement, antialias: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(width, height);
    this.onResize();

    // Lights
    const hemiLight = new HemisphereLight(0xffffff, 0x444444, 1.2);
    hemiLight.position.set(0, 20, 0);
    this.scene.add(hemiLight);

    const dirLight = new DirectionalLight(0xffffff, 1);
    dirLight.position.set(5, 20, 7.5);
    this.scene.add(dirLight);

    // Controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.target.set(0, 13, 0);
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

    window.addEventListener('resize', () => this.onResize());
  }

  private animate(): void {
    requestAnimationFrame(() => this.animate());
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }

  private onResize(): void {
    if (!this.renderer || !this.camera) return;

    const container = this.canvasRef.nativeElement.parentElement!;
    const width = container.clientWidth;
    const height = container.clientHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  sendMessage() {
    const message = this.messageInput.value;

    if (!message || !message.trim()) {
      return; // Avoid sending empty message
    }

    this.messages.push({ sender: 'user', content: message });

    // Simulate assistant's reply
    setTimeout(() => {
      this.messages.push({ sender: 'assistant', content: 'This is a response from the assistant.' });
    }, 1000); // Simulate delay

    this.messageInput.setValue(''); // Clear the input field after sending

    // Uncomment and call the actual service method for sending the message
    // this.chatService.sendMessage(mockChatMessage).subscribe({
    //   next: (data) => this.messages = data,
    //   error: (err) => console.error('Error sending message:', err)
    // });

  }


}
