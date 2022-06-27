import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newMemberName = "";
  members: string[] = [];
  errorMessage = "";
  numberOfTeam: number | "" = "";
  teams: string[][] = [];
  addMember() {
    if (!this.newMemberName) {
      this.errorMessage = "* Name can not be empty!";
      return;
    }
    this.errorMessage = "";
    this.members.push(this.newMemberName);
    this.newMemberName = "";
  };

  onInput(member: string) {
    this.newMemberName = member;
  };

  onInputTeam(value: string) {
    this.numberOfTeam = Number(value);
  };

  onGenerate() {
    if (!this.numberOfTeam || this.numberOfTeam <= 0) {
      return;
    }
    const allMembers = [...this.members]
    for (let i = 0; i < this.numberOfTeam; i++) {
      const randomIndex = Math.floor(Math.random() * allMembers.length)
      const member = allMembers.splice(randomIndex, 1)[0]
    }
  };
}
