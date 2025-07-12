import { Component, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamService } from '../../core/services';
import { ITeamMember } from '../../core/models';

@Component({
  selector: 'app-team',
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent implements OnInit {
  private teamService = inject(TeamService);
  
  teamMembers = signal<ITeamMember[]>([]);

  ngOnInit() {
    this.teamMembers.set(this.teamService.getTeamMembers());
  }


}
