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
      "<p>Music is crucial to me. I listen to quite a number of artists and have music on most of the day.<br/>" +
      "My favorite artists are Andrei Irimia and P!nk, but I really like Poets of the Fall as well.<br/>" +
      "I listen to a number of songs from The Script, Evanescence, Ludovico Einaudi and Halestorm.<br/>" +
      "There are several more artists I listen to, but there are too many to name here :).<br/>" +
      "I play piano as well and have recorded a number of covers for on my YouTube channel " +
      "(most from artists I have mentioned here).</p>"
    ),
    new NavTab('Movies and Series',
      "<p>I don't really watch all that many movies and series, but there are a few that I like:<br/>" +
      "I really like James Bond, I've seen all those movies. I also like music films like Camp Rock and High School Musical.<br/>" +
      "I've seen all the Harry Potter movies and the movies in the Marvel Cinematic Universe collection up to Endgame.</p>" +
      "<p>I barely watch any series, but there are two Dutch series that I really love: Flikken Maastricht and Wie Is De Mol.<br/>" +
      "I also follow Doctor Who and the anime season in Japan.</p>"),
    new NavTab('Books',
      "<p>I love escaping into a book. I can often be found with my nose inside some romantic fantasy book when my workload allows it.<br/>" +
      "I have an e-reader with a small 1000 books that I still need\\want to read, and every time I go on Goodreads or into a bookstore, " +
      "more are added.<br/>" +
      "Series I really loved are:</p>" +
      "<ul>" +
      "<li>The Coven series by Chandelle Lavaun (my absolute favourite series of all time)</li>" +
      "<li>Rangers apprentice series (John Flanagan) and spinoffs</li>" +
      "<li>The mortal instruments series and spinoffs (Cassandra Clare)</li>" +
      "<li>The Tiger Saga (Colleen Houck)</li>" +
      "<li>The Divergent series (Veronica Roth)</li>" +
      "<li>All the fantasy series Rick Riordan wrote (like Percy Jackson)</li>" +
      "<li>The Doon series (Carey Corp, Lorie Langdon)</li>" +
      "<li>The Fallen series (Lauren Kate)</li>" +
      "<li>The Origin Mystery series (A. G. Riddle)</li>" +
      "<li>The Elementals Series (Michelle Madows)</li>" +
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
      "<li>Norway</li>" +
      "<li>Finland</li>" +
      "<li>Denmark</li>" +
      "<li>Budapest (Hungary)</li>" +
      "</ul>" +
      "<p>But I want to (re)visit a lot more places, namely:</p>" +
      "<div class='row'>" +
      "<div class='col-md-6'>" +
      "<ul>" +
      "<li>Japan</li>" +
      "<li>Andorra</li>" +
      "<li>Norway</li>" +
      "<li>Wales</li>" +
      "<li>Canada</li>" +
      "<li>NASA headquarters (Washington D.C.)</li>" +
      "<li>Great Barri&euml;r Reef (Australia)</li>" +
      "<li>Iceland</li>" +
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
      "<li>Croatia</li>" +
      "<li>Athens (Greece)</li>" +
      "<li>Roemania</li>" +
      "<li>Sicily (Italy)</li>" +
      "<li>China</li>" +
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
      "further develop my soft skills and get some experience with managing a lot of time next to a full time bachelor. " +
      "I also got experience with doing big projects for companies and managing group projects.</p>" +
      "<p>I like developing in an environment where I can work together / spar with other developers, " +
      "but where I can still work focussed on features 1 at a time. " +
      "Complex tickets that require full stack development are my favourite, " +
      "where I can work from getting the data from the database through and endpoint (that I would have to write myself) to the frontend " +
      "where I visualize the data.</p>")
  ]
}
