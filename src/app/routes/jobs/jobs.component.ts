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
    new NavTab('Professional jobs',
      "<h4>Java webdeveloper at The Factor.E (2001—March 2024)</h4>" +
      "<p>" +
      "In the 5 years since I graduated, I spent 3.5 years as a backend java development in addition to some templating work in a cms (bloomreach). " +
      "I started out just creating easy templates and components while my seniors dealt with the customers and getting the work clear. " +
      "However, in the 3.5 years I spent at The Factor.E, I ended up growing into a lead role for one of our customers and support leads for others. " +
      "I was closely involved with the creation of the new website for Hanze.nl, which I ended up taking over as lead after the mvp of the project was delivered. " +
      "I learned a lot about asking for specifics and trying to find out exactly what it is a customer wants in this job. " +
      "I used Java and Freemarker templating in this job to configure the components I needed to make. " +
      "</p>" +
      "<h4>Fullstack Java + Angular developer at OCLC (March 2024—present)</h4>" +
      "<p>" +
      "At this job, I got to pursue my long time wish to work in the fullstack development. " +
      "I did this at a company transferring their old cgi frontend applications to new angular applications including a new restapi. " +
      "I joined this company right after the first release of this new angular application, which was very much still an mvp. " +
      "Here I learned how to work in a big application with a lot of legacy code. " +
      "The focus was on rewriting that code, while at the same time keeping up with bugfixes in both the new and old applications. " +
      "I learned to work with the ngrx store and how to program over the full stack. " +
      "I also learned to work with openXML documentation for creating restapi endpoints and to work with stored procedures in the database." +
      "</p>"
    ),
    new NavTab('Jobs - semi-related',
      "<p>" +
      "Before graduation, I always looked for small jobs I could do with my computer science skills. " +
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
      "I didn't have any experience with creating games, but after I read a lot online, I could make a game quite easily. " +
      "I chose to do this in python because this is the language I'm most familiar with, but in hindsight " +
      "I should have gone with Java, because now they couldn't implement it in their commercial website." +
      "</p>"),
    new NavTab('Internships',
      "<p>During the last year of my bachelor, I had to do two internships. " +
      "From september the first 2019 until the end of January 2020, the first internship took place. " +
      "I worked on creating a web application with Java (and jsp pages), JavaScript, HTML, and CSS " +
      "for the Neuroscience department of the KU Leuven with which they can access their database easily. " +
      "The web-app consists of two parts: one where they can request patient actions from their database, " +
      "and then it will be visualised and the researchers can score the patient's performance " +
      "and one where they can request statistical plots with the scores already in the database, so patient progress can be tracked. " +
      "Next to that, several reports were written. Like about safety procedures to keep in mind and about the project itself. " +
      "In the end, a poster presentation was done about the entire half-year long internship." +
      "</p>" +
      "<p>Then in the second half of the school year I had to do another internship, " +
      "This time as a graduation project. This one was in Wageningen, The Netherlands, " +
      "in which I had to create a quality report for bionano material and from that report, " +
      "give advice about how to best run an assembly. After the practical work, " +
      "the internship was finished with a presentation, written report and defence.</p>"),
    new NavTab('Jobs - unrelated',
      "<p>" +
      "My first job was doing the dishes in a tiny (but very busy) restaurant in my village. " +
      "I learned quite a lot from this, even though it's completely unrelated to my study field. " +
      "For example, I learned what it is like to perform under a lot of pressure and what it is like for a lot of people to depend on you. " +
      "These were valuable life lessons, and it changed me in a way I couldn't predict beforehand. " +
      "I learned the value of a fun job compared to money, because it doesn't pay a lot, and it is heavy work, but it was fun and that's what counts. " +
      "</p>")
  ]
}
