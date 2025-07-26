import { Component, OnInit } from '@angular/core';
import {NavTab} from "../../models/nav-tab";

@Component({
  selector: 'app-schooling',
  templateUrl: './schooling.component.html',
  styleUrls: ['./schooling.component.css'],
  standalone: false
})
export class SchoolingComponent {
  protected readonly navTabs: NavTab[] = [
    new NavTab('Highschool',
      "<p>" +
      "After my 2 years in the so called \"brugklas\" where you do two streams and after that you choose 1, I went to VWO. " +
      "Sadly due to personal reasons, I had to go down one stream after the third year of high school (so only one year on VWO) " +
      "to HAVO and after another two years I graduated from this stream. " +
      "I took the double exam package \"Nature and Health\" and \"Nature and tech\". " +
      "So in the end, I graduated from high school with the following courses:" +
      "</p>" +
      "<ul>" +
      "<li>English*</li>" +
      "<li>Dutch*</li>" +
      "<li>PE*</li>" +
      "<li>Social science*</li>" +
      "<li>Cultural shaping*</li>" +
      "<li>Mathematics B**</li>" +
      "<li>Biology**</li>" +
      "<li>Chemistry**</li>" +
      "<li>Physics**</li>" +
      "<li>Computer science</li>" +
      "</ul>" +
      "<p>" +
      "* Mandatory for all HAVO students<br/>" +
      "**Mandatory in my course packages<br/>" +
      "</p>"),
    new NavTab('Bachelor of Science',
      "<p>An HBO bachelor consists of two parts: the propadeautic year, which is the first year, for which you get a separate diploma," +
      " and the main bachelor part. " +
      "I graduated from my propadeautic year bio-informatics cum-laude in 2017. " +
      "The courses consisted of basic programming, biology and chemistry courses, a little above high school level in the case of biology and chemistry. " +
      "Because I took computer science in high school, the programming courses were fairly simple in the beginning, but after half a year it was more at the level I was at. " +
      "Then every term had a practical assignment, intended to put theory into practice. " +
      "For example, one of the assignments was to create a website to calculate possible genetics of an unborn child. " +
      "Someone could put a genetic code for two parents into a form, " +
      "after which it would calculate all the possible genotypes and fenotypes for a baby from that and visualize that on the screen.</p>" +
      "<p>" +
      "During the main phase of my bachelor, I had many specific biology classes like immunology and microbiology, " +
      "but also more in-depth computer science classes about for example, database management and creation using mySQL. " +
      "I also had more advanced statistics courses in R, where the statistics for a specific way of research was taught " +
      "(general statistics was taught in the last term of the first year). " +
      "I have also had general courses in so called \"Theory of bioinformatics\", " +
      "in which everything about alignments and the different algorithms for that was taught " +
      "(including one course devoted to all the different BLAST algorithms). " +
      "I also had basic Java, datamining and webservice creation courses. " +
      "In the second half of my third year, I went abroad to the University Of Goteborg. " +
      "Here I took a course on \"Bioinformatics and functional genomics\", in which I was taught to find the " +
      "function of an unknown gene or protein by looking through different databases and making use of online algorithms. " +
      "I have had one or more biology courses on the following topics:" +
      "</p>" +
      "<ul>" +
      "<li>Microbiology (both bacteria/archaea and viruses)</li>" +
      "<li>Biochemistry</li>" +
      "<li>Immunology</li>" +
      "<li>Genetics</li>" +
      "<li>Molecular biology</li>" +
      "</ul>" +
      "<p>During my last year, I did two internships. " +
      "The first one was about creating a web interface for a research group in Leuven, Belgium, " +
      "so they can easily access their database and analyze the data.<br/>" +
      "The second was in Wageningen, The Netherlands. In this internship, I had to optimize a Bionano Genomics pipeline and " +
      "create a good way to assess the quality of the molecules that come out of the pipeline and advice on " +
      "assembly settings for them.</p>"
    ),
    new NavTab('Honorary programs',
      "<h4>Wetsus talent program</h4>" +
      "<p>" +
      "During my third year of high school, I did a research project with a local research facility. " +
      "This was inside the Wetsus Talent Program in which a few talented high school students got the chance to " +
      "work with a professor on a research project and go to a science fair with that. " +
      "My project was about the influence of electrical current on pepper plants. Through this project, I " +
      "first learned how to observe and write down everything in a clear and reproducible way. " +
      "The science fair in Slovakia was also a great experience to have, " +
      "because it taught me how to attract the attention of public walking all around you. " +
      "Now that I actually have a scientific background, " +
      "I can see that the entire process of setting up and doing the project wasn't very scientific at all," +
      "but it still taught me some valuable lessons.</p>" +
      "<h4>Hanze Honours program</h4>" +
      "<p>" +
      "From the second year of my bachelor onward, " +
      "I enrolled in the honours program of my school to become an excellent student and the best version of myself. " +
      "In this program, you have to get 30 extra ECTS by doing extra courses and projects next to your study program. " +
      "I worked on several inpactful projects over the timespan of 2 years next to my studies. " +
      "I learned to work interdisciplinary and how to ask out wishes from \"customers\" while making something for someone else.</p>"
    ),
    new NavTab('Professional education',
      "<h4>YoungCapital C# traineeship</h4>" +
      "<p>" +
      "To make the transition into fullstack development, " +
      "I did a C#.Net traineeship of eight weeks provided by YoungCapital Next. " +
      "In this traineeship I got the chance to earn two certificates: Scrum PSM1 and MCSD 70-483. " +
      "At the beginning of the traineeship, they discovered that my level of expertise was a lot " +
      "higher than the level they were expecting. " +
      "To prevent me from getting bored, they offered me the chance to do two traineeships at the same time, " +
      "so I ended up doing their Java traineeship as well. " +
      "Because of this, I also got the chance to take the OCA (Oracle Certified Associate) exam." +
      "</p>")
  ]
}
