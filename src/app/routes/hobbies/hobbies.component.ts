import { Component } from '@angular/core';
import {NavTab} from "../../models/nav-tab";

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css'],
  standalone: false
})
export class HobbiesComponent {
  protected readonly navTabs: NavTab[] = [
    new NavTab('Music',
      "<p>Music is crucial to me. I listen to a number of artists.<br/>" +
      "My favorite artists are P!nk and Andrei Irimia, but I really like Poets of the Fall too.<br/>" +
      "I listen to a number of songs from the script, dream theater, threshold and Jan Smit too.<br/>" +
      "I listen to Eurovision-Songcontest songs too and music from movies like camp rock and High School Musical.<br/>" +
      "Last but not least, I listen to k-otic and some other random songs too.</p>"),
    new NavTab('Movies and Series',
      "<p>I don't really watch all that many movies and series, but there are a view of them that I do like:<br/>" +
      "I really like James Bond, I've seen all those movies. I also like music films like Camp Rock and High School Musical.<br/>" +
      "I've seen all the Harry Potter movies and I love romantic movies like Twilight.<br/>" +
      "I've also seen all the movies in the Marvel Cinematic Universe collection.</p>" +
      "<p>I barely watch any series, but there are two dutch series that I really love: Flikken Maastricht and Wie Is De Mol.<br/>" +
      "I also follow the new series of Doctor Who and some fantasy series on Netflix like Shadowhunters, Lucifer and the Shannara Chronicles.</p>"),
    new NavTab('Books',
      "<p>I love escaping into a book and I can often be found with my nose inside some romantic fantasy book when my workload allows it.<br/>" +
      "I have an e-reader with a small 1000 books that I still need\\want to read and every time I go on Goodreads or into a book store, more are added.<br/>" +
      "Series I really loved are:</p>" +
      "<ul>" +
      "<li>Rangers apprentice series (John Flanagan) and spinoffs</li>" +
      "<li>The mortal instruments series and spinoffs (Cassandra Clare)</li>" +
      "<li>The Tiger Saga (Colleen Houck)</li>" +
      "<li>The Divergent series (Veronica Roth)</li>" +
      "<li>All the fantasy series Rick Riordan wrote (like Percy Jackson)</li>" +
      "<li>The Doon series (Carey Corp, Lorie Langdon)</li>" +
      "<li>The Fallen series (Lauren Kate)</li>" +
      "<li>The Origin Mystery series (A.G. Riddle)</li>" +
      "<li>The Elementals Series (Michelle Madows)</li>" +
      "<li>Etcetera...</li>" +
      "</ul>"),
    new NavTab('Travels',
      "<p>I love to travel and I have visited many places and countries:</p>" +
      "<ul>" +
      "<li>Czech Republic</li>" +
      "<li>Slovakia</li>" +
      "<li>Germany</li>" +
      "<li>Andorra</li>" +
      "<li>France</li>" +
      "<li>Egypt</li>" +
      "<li>Crete (Greece)</li>" +
      "<li>Italy</li>" +
      "<li>England</li>" +
      "<li>Ireland (Dublin)</li>" +
      "<li>The Netherlands :p</li>" +
      "<li>Tenerife (Canary Islands, Spain)</li>" +
      "<li>Gran Canaria (Canary Islands, Spain)</li>" +
      "<li>Portugal</li>" +
      "<li>Bonaire (Netherlands Antilles)</li>" +
      "<li>Sweden</li>" +
      "<li>Belgium</li>" +
      "</ul>" +
      "<p>But I want to (re)visit a lot more places, namely:</p>" +
      "<div class='row'>" +
      "<div class='col-md-6'>" +
      "<ul>" +
      "<li>Norway</li>" +
      "<li>Finland</li>" +
      "<li>Wales</li>" +
      "<li>Canada</li>" +
      "<li>NASA headquarters (Washington D.C.)</li>" +
      "<li>Great Barri&euml;r Reef (Australia)</li>" +
      "<li>Iceland</li>" +
      "<li>Denmark</li>" +
      "<li>Scotland</li>" +
      "<li>New Zealand</li>" +
      "<li>Brazil</li>" +
      "<li>Madagascar</li>" +
      "<li>South Africa</li>" +
      "<li>Zambia</li>" +
      "<li>Switzerland</li>" +
      "<li>The Grand Canyon (USA)</li>" +
      "<li>Niagara Falls (border Canada/US)</li>" +
      "</ul>" +
      "</div>" +
      "<div class='col-md-6'>" +
      "<ul>" +
      "<li>Galway (Ireland)</li>" +
      "<li>San Francisco (USA)</li>" +
      "<li>The Thrill Walk (schiltorn, Switserland)</li>" +
      "<li>Highest swing in the world (Queenstown, New Zealand)</li>" +
      "<li>Saariselka/ Kakslauttanen igloos Finland</li>" +
      "<li>Indonesia</li>" +
      "<li>Thailand</li>" +
      "<li>Sri lanka</li>" +
      "<li>Fiji islands</li>" +
      "<li>Greece</li>" +
      "<li>Portugal</li>" +
      "<li>Andorra</li>" +
      "<li>Croatia</li>" +
      "<li>Athens (Greece)</li>" +
      "<li>Japan</li>" +
      "</ul>" +
      "</div>" +
      "</div>" +
      "<p>I love nature and most of the countries on my bucket list are because of that.<br/>" +
      "Some have to do with my interest in space and some with my daredevil behavior.<br/>" +
      "The countries in the UK have to do with the fact that my mom always went there " +
      "at the end of the boating season and brought back many good stories.</p>"),
    new NavTab("Ambitions and interests",
      "<p>I'm very ambitious and I always have been. I do everything in my power to further my skills and do my job thoroughly. " +
      "I got my propadeautic year cum-laude, and I have done an Honours program to " +
      "further my soft skills and get some experience with managing a lot of time next to a full time bachelor. " +
      "I also got experience with doing big projects for companies and managing group projects.</p>" +
      "<p>I'm very interested in phylogenetics and microbiology and I think the genetics of plants are also fascinating. " +
      "I like database management and creating (web)apps the best, but I also like modeling biological systems with R.</p>")
  ]
}
