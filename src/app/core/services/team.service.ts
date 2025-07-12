import { Injectable } from '@angular/core';
import { ITeamMember } from '../models';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

private teamMembers: ITeamMember[] = [
    {
        id: '1',
        name: 'Luis Sagnay',
        role: 'Senior Frontend Developer',
        photoUrl: 'img/luis.jpeg',
        description: 'Especialista en Angular y React con más de 5 años de experiencia creando interfaces modernas y responsivas.',
        technologies: ['Angular', 'React', 'TypeScript', 'Tailwind CSS'],
        linkedinUrl: 'https://linkedin.com/in/maria-garcia',
        githubUrl: 'https://github.com/luis-sagx',
        email: 'luis@bitcrack.com',
        featured: true
    },
    {
        id: '2',
        name: 'Jefferson Yepez',
        role: 'Lead Backend Developer',
        photoUrl: 'img/jefferson.png',
        description: 'Arquitecto de software con expertise en microservicios y cloud computing. Líder técnico con pasión por la innovación.',
        technologies: ['Node.js', 'Python', 'AWS', 'Docker', 'MongoDB'],
        linkedinUrl: 'https://linkedin.com/in/carlos-rodriguez',
        githubUrl: 'https://github.com/Ypz22',
        email: 'jefferson@bitcrack.com',
        featured: true
    },
    {
        id: '3',
        name: 'Sebastian Parra',
        role: 'UX/UI Designer',
        photoUrl: 'img/parra.png',
        description: 'Diseñadora creativa enfocada en experiencias de usuario intuitivas y diseños modernos que conectan con los usuarios.',
        technologies: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping'],
        linkedinUrl: 'https://linkedin.com/in/ana-martinez',
        twitterUrl: 'https://twitter.com',
        githubUrl: 'https://github.com/Sebas-Parra',
        email: 'parrita@bitcrack.com',
        featured: false
    },
    {
        id: '4',
        name: 'Mateo García',
        role: 'DevOps Engineer',
        photoUrl: 'img/mateo.png',
        description: 'Experto en automatización y deployment continuo. Especialista en infraestructura cloud y seguridad.',
        technologies: ['Kubernetes', 'Jenkins', 'Terraform', 'Azure', 'Git'],
        linkedinUrl: 'https://linkedin.com/in/david-lopez',
        githubUrl: 'https://github.com/Cotbert2',
        email: 'mateo@bitcrack.com',
        featured: false
    }
];

  getTeamMembers(): ITeamMember[] {
    return this.teamMembers;
  }

  getFeaturedMembers(): ITeamMember[] {
    return this.teamMembers.filter(member => member.featured);
  }

  getTeamMemberById(id: string): ITeamMember | undefined {
    return this.teamMembers.find(member => member.id === id);
  }
}
