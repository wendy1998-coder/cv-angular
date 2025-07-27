import { Component } from '@angular/core';
import { NavTab } from "../../models/nav-tab";

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
  standalone: false
})
export class JobsComponent {
  protected readonly navTabs: NavTab[] = [
    new NavTab('Jobs - related',
      "<p>" +
      "I have always looked for small jobs I could do with my computer science skills. " +
      "I made a Dutch website for a company called \"lumen\". " +
      "From that project, I learned how to work with Bootstrap and scss files." +
      "</p>" +
      "<p>" +
      "I was a student assistant for one term in the minor class. " +
      "This meant that I had to help students with their practical assignments " +
      "during the practical lessons, and in return, I got two credits for my honours program." +
      "</p>" +
      "<p>" +
      "My last semi-related job was creating a game for the company of my mother. " +
      "I didn't have any experience with creating games, but after I read a lot online I could make a game quite easily. " +
      "I chose to do this in python, because this is the language I'm most familiar with, but in hindsight " +
      "I should have gone with Java, because now they couldn't implement it in their commercial website." +
      "</p>"),
    new NavTab('Internships',
      "<p>During the last year of my bachelor, I had to do two internships. " +
      "From september the first 2019 until the end of January 2020, the first internship took place. " +
      "I worked on creating a web application with Java (and jsp pages), JavaScript, HTML, and CSS " +
      "for the Neuroscience department of the KU Leuven with which they can access their database easily. " +
      "The web-app consists of two parts: one where they can request patient actions from their database, " +
      "and then it will be visualized and the researchers can score the patients performance " +
      "and one where they can request statistical plots with the scores already in the database, so patient progress can be tracked. " +
      "Next to that, several reports were written. Like about safety procedures to keep in mind and about the project itself. " +
      "In the end, a poster presentation needs to be done." +
      "</p>" +
      "<p>Then in the second half of the school year I had to do another internship, " +
      "This time as a graduation project. This one was in Wageningen, The Netherlands, " +
      "in which I had to create a quality report for bionano material and from that report, " +
      "give advice about how to best run an assembly. After the practical work, " +
      "the project was finished with a presentation and defense.</p>"),
    new NavTab('Jobs - unrelated',
      "<p>" +
      "My first job was doing the dishes in a tiny (but very busy) restaurant in my village. " +
      "I learned quite a lot from this, even though it's completely unrelated to my study field. " +
      "For example, I learned what it is like to perform under a lot of pressure and what it is like for a lot of people to depend on you. " +
      "These were valuable life lessons and it changed me in a way I couldn't predict beforehand. " +
      "I learned the value of a fun job compared to money, because it doesn't pay a lot, and it is heavy work, but it was fun and that's what counts. " +
      "</p>")
  ]
}
