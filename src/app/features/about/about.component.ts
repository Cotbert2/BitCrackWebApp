import { Component } from '@angular/core';
import { IiconInfo, IImageInfo } from '../../core/models';
import { TitleCasePipe } from '@angular/common';
@Component({
  selector: 'app-about',
  imports: [TitleCasePipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  trustedCompanies : IImageInfo[] = [
    { src: '/img/microsoft.jpg', alt: 'Microsoft' },
    { src: '/img/tesla_logo.png', alt: 'Tesla' },
    { src: '/img/google_logo.png', alt: 'Google' },
    { src: '/img/spotify.png', alt: 'Spotify' },
    { src: '/img/meta.png', alt: 'Meta' },
    { src: '/img/pepsi.png', alt: 'Pepsi' },
    { src: '/img/pinterest.png', alt: 'Pinterest' },
    { src: '/img/nike.webp', alt: 'Nike' },
    { src: '/img/mac.jpg', alt: 'Apple' },
    { src: '/img/netfliix.png', alt: 'Netflix' },
    { src: '/img/hbo.svg', alt: 'HBO' }
  ];

  technologyStack : IiconInfo[] = [
    // Frontend
    { class: 'devicon-angularjs-plain colored', title: 'Angular' },
    { class: 'devicon-react-original colored', title: 'React' },
    { class: 'devicon-vuejs-plain colored', title: 'Vue.js' },
    { class: 'devicon-tailwindcss-plain colored', title: 'Tailwind CSS' },
    { class: 'devicon-bootstrap-plain colored', title: 'Bootstrap' },

    // Backend
    { class: 'devicon-nodejs-plain colored', title: 'Node.js' },
    { class: 'devicon-express-original colored', title: 'Express.js' },
    { class: 'devicon-nestjs-plain colored', title: 'NestJS' },

    // Databases
    { class: 'devicon-mongodb-plain colored', title: 'MongoDB' },
    { class: 'devicon-postgresql-plain colored', title: 'PostgreSQL' },
    { class: 'devicon-mysql-plain colored', title: 'MySQL' },
    { class: 'devicon-sqlite-plain colored', title: 'SQLite' },


    { class: 'devicon-docker-plain colored', title: 'Docker' },
    { class: 'devicon-kubernetes-plain colored', title: 'Kubernetes' },
    { class: 'devicon-git-plain colored', title: 'Git' },
    { class: 'devicon-github-original colored', title: 'GitHub' },
    { class: 'devicon-jenkins-plain colored', title: 'Jenkins' },
    { class: 'devicon-nginx-original colored', title: 'NGINX' },

    { class: 'devicon-aws-plain colored', title: 'AWS' },
    { class: 'devicon-googlecloud-plain colored', title: 'Google Cloud' },
    { class: 'devicon-azure-plain colored', title: 'Azure' },

    { class: 'devicon-linux-plain colored', title: 'Linux' },
    { class: 'devicon-python-plain colored', title: 'Python' },
    { class: 'devicon-java-plain colored', title: 'Java' },
    { class: 'devicon-typescript-plain colored', title: 'TypeScript' }
  ];
}
