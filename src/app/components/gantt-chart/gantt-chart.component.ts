import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'
import { TaskModel } from '../kanban/models/task.model'
import { AssigneeModel } from '../kanban/models/assignee.model'
import { LabelModel } from '../kanban/models/label.model'

@Component({
  selector: 'app-gantt-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gantt-chart.component.html',
  styleUrl: './gantt-chart.component.scss'
})
export class GanttChartComponent implements OnInit {
  tasks: TaskModel[] = [{
    id: "CGB",
    title: "Filippa",
    code: "Blader",
    actualStartDate: new Date("11/13/2024"),
    actualEndDate: new Date("11/5/2024"),
    planStartDate: new Date("11/24/2024"),
    planEndDate: new Date("11/17/2024"),
    progress: 89,
    status: "fblader0",
    description: "Goldenrod",
    assignee: null
  }, {
    id: "KHZ",
    title: "Sherwood",
    code: "Binley",
    actualStartDate: new Date("11/12/2024"),
    actualEndDate: new Date("11/2/2024"),
    planStartDate: new Date("11/7/2024"),
    planEndDate: new Date("11/4/2024"),
    progress: 40,
    status: "sbinley1",
    description: "Violet",
    assignee: null
  }, {
    id: "NSK",
    title: "Freddi",
    code: "Haffner",
    actualStartDate: new Date("11/9/2024"),
    actualEndDate: new Date("11/12/2024"),
    planStartDate: new Date("11/10/2024"),
    planEndDate: new Date("11/28/2024"),
    progress: 92,
    status: "fhaffner2",
    description: "Turquoise",
    assignee: null
  }, {
    id: "BYK",
    title: "Elden",
    code: "Starkings",
    actualStartDate: new Date("11/24/2024"),
    actualEndDate: new Date("11/21/2024"),
    planStartDate: new Date("11/1/2024"),
    planEndDate: new Date("11/8/2024"),
    progress: 81,
    status: "estarkings3",
    description: "Pink",
    assignee: null
  }, {
    id: "MVY",
    title: "Jaye",
    code: "Skillen",
    actualStartDate: new Date("11/11/2024"),
    actualEndDate: new Date("11/2/2024"),
    planStartDate: new Date("11/16/2024"),
    planEndDate: new Date("11/19/2024"),
    progress: 82,
    status: "jskillen4",
    description: "Turquoise",
    assignee: null
  }, {
    id: "AXG",
    title: "Babb",
    code: "Fernely",
    actualStartDate: new Date("11/5/2024"),
    actualEndDate: new Date("11/16/2024"),
    planStartDate: new Date("11/11/2024"),
    planEndDate: new Date("11/10/2024"),
    progress: 57,
    status: "bfernely5",
    description: "Crimson",
    assignee: null
  }, {
    id: "HOC",
    title: "Margalo",
    code: "Cubuzzi",
    actualStartDate: new Date("11/10/2024"),
    actualEndDate: new Date("11/21/2024"),
    planStartDate: new Date("11/2/2024"),
    planEndDate: new Date("11/14/2024"),
    progress: 11,
    status: "mcubuzzi6",
    description: "Mauv",
    assignee: null
  }, {
    id: "ELV",
    title: "Melvin",
    code: "Humphrys",
    actualStartDate: new Date("11/20/2024"),
    actualEndDate: new Date("11/12/2024"),
    planStartDate: new Date("11/27/2024"),
    planEndDate: new Date("11/1/2024"),
    progress: 43,
    status: "mhumphrys7",
    description: "Puce",
    assignee: null
  }, {
    id: "ELY",
    title: "Em",
    code: "Ockwell",
    actualStartDate: new Date("11/3/2024"),
    actualEndDate: new Date("11/17/2024"),
    planStartDate: new Date("11/6/2024"),
    planEndDate: new Date("11/7/2024"),
    progress: 93,
    status: "eockwell8",
    description: "Pink",
    assignee: null
  }, {
    id: "BIP",
    title: "Delmar",
    code: "Leathart",
    actualStartDate: new Date("11/9/2024"),
    actualEndDate: new Date("11/7/2024"),
    planStartDate: new Date("11/3/2024"),
    planEndDate: new Date("11/5/2024"),
    progress: 83,
    status: "dleathart9",
    description: "Yellow",
    assignee: null
  }, {
    id: "CIA",
    title: "Vinny",
    code: "Bidewell",
    actualStartDate: new Date("11/3/2024"),
    actualEndDate: new Date("11/26/2024"),
    planStartDate: new Date("11/16/2024"),
    planEndDate: new Date("11/20/2024"),
    progress: 83,
    status: "vbidewella",
    description: "Pink",
    assignee: null
  }, {
    id: "TNQ",
    title: "Thorin",
    code: "Handrick",
    actualStartDate: new Date("11/20/2024"),
    actualEndDate: new Date("11/29/2024"),
    planStartDate: new Date("11/1/2024"),
    planEndDate: new Date("11/28/2024"),
    progress: 6,
    status: "thandrickb",
    description: "Blue",
    assignee: null
  }, {
    id: "CMP",
    title: "Gunilla",
    code: "Trobridge",
    actualStartDate: new Date("11/14/2024"),
    actualEndDate: new Date("11/25/2024"),
    planStartDate: new Date("11/15/2024"),
    planEndDate: new Date("11/22/2024"),
    progress: 48,
    status: "gtrobridgec",
    description: "Yellow",
    assignee: null
  }, {
    id: "RNP",
    title: "Celle",
    code: "Spain-Gower",
    actualStartDate: new Date("11/24/2024"),
    actualEndDate: new Date("11/12/2024"),
    planStartDate: new Date("11/19/2024"),
    planEndDate: new Date("11/17/2024"),
    progress: 24,
    status: "cspaingowerd",
    description: "Indigo",
    assignee: null
  }, {
    id: "YVA",
    title: "Mirabel",
    code: "McGilvra",
    actualStartDate: new Date("11/15/2024"),
    actualEndDate: new Date("11/27/2024"),
    planStartDate: new Date("11/11/2024"),
    planEndDate: new Date("11/12/2024"),
    progress: 24,
    status: "mmcgilvrae",
    description: "Teal",
    assignee: null
  }, {
    id: "BMJ",
    title: "Ingeberg",
    code: "Gumm",
    actualStartDate: new Date("11/27/2024"),
    actualEndDate: new Date("11/29/2024"),
    planStartDate: new Date("11/18/2024"),
    planEndDate: new Date("11/19/2024"),
    progress: 44,
    status: "igummf",
    description: "Maroon",
    assignee: null
  }, {
    id: "HKD",
    title: "Claudio",
    code: "Gribbell",
    actualStartDate: new Date("11/24/2024"),
    actualEndDate: new Date("11/18/2024"),
    planStartDate: new Date("11/14/2024"),
    planEndDate: new Date("11/5/2024"),
    progress: 86,
    status: "cgribbellg",
    description: "Aquamarine",
    assignee: null
  }, {
    id: "BRI",
    title: "Bink",
    code: "Rainforth",
    actualStartDate: new Date("11/22/2024"),
    actualEndDate: new Date("11/12/2024"),
    planStartDate: new Date("11/12/2024"),
    planEndDate: new Date("11/4/2024"),
    progress: 29,
    status: "brainforthh",
    description: "Purple",
    assignee: null
  }, {
    id: "OCS",
    title: "Janeta",
    code: "Kindle",
    actualStartDate: new Date("11/7/2024"),
    actualEndDate: new Date("11/2/2024"),
    planStartDate: new Date("11/11/2024"),
    planEndDate: new Date("11/5/2024"),
    progress: 17,
    status: "jkindlei",
    description: "Violet",
    assignee: null
  }, {
    id: "JPA",
    title: "Dora",
    code: "Foucard",
    actualStartDate: new Date("11/26/2024"),
    actualEndDate: new Date("11/25/2024"),
    planStartDate: new Date("11/22/2024"),
    planEndDate: new Date("11/7/2024"),
    progress: 68,
    status: "dfoucardj",
    description: "Yellow",
    assignee: null
  }, {
    id: "CPC",
    title: "Harli",
    code: "Moyles",
    actualStartDate: new Date("11/22/2024"),
    actualEndDate: new Date("11/11/2024"),
    planStartDate: new Date("11/22/2024"),
    planEndDate: new Date("11/27/2024"),
    progress: 89,
    status: "hmoylesk",
    description: "Maroon",
    assignee: null
  }, {
    id: "BVP",
    title: "Dollie",
    code: "Pedro",
    actualStartDate: new Date("11/9/2024"),
    actualEndDate: new Date("11/9/2024"),
    planStartDate: new Date("11/7/2024"),
    planEndDate: new Date("11/13/2024"),
    progress: 40,
    status: "dpedrol",
    description: "Mauv",
    assignee: null
  }, {
    id: "GUG",
    title: "Joseito",
    code: "Mawd",
    actualStartDate: new Date("11/10/2024"),
    actualEndDate: new Date("11/16/2024"),
    planStartDate: new Date("11/3/2024"),
    planEndDate: new Date("11/26/2024"),
    progress: 44,
    status: "jmawdm",
    description: "Crimson",
    assignee: null
  }, {
    id: "MWV",
    title: "Elga",
    code: "Raselles",
    actualStartDate: new Date("11/7/2024"),
    actualEndDate: new Date("11/24/2024"),
    planStartDate: new Date("11/27/2024"),
    planEndDate: new Date("11/6/2024"),
    progress: 44,
    status: "erasellesn",
    description: "Crimson",
    assignee: null
  }, {
    id: "PTM",
    title: "Raleigh",
    code: "Huckerby",
    actualStartDate: new Date("11/13/2024"),
    actualEndDate: new Date("11/12/2024"),
    planStartDate: new Date("11/19/2024"),
    planEndDate: new Date("11/19/2024"),
    progress: 63,
    status: "rhuckerbyo",
    description: "Yellow",
    assignee: null
  }, {
    id: "FTA",
    title: "Pepita",
    code: "Zini",
    actualStartDate: new Date("11/26/2024"),
    actualEndDate: new Date("11/13/2024"),
    planStartDate: new Date("11/2/2024"),
    planEndDate: new Date("11/1/2024"),
    progress: 74,
    status: "pzinip",
    description: "Khaki",
    assignee: null
  }, {
    id: "BNS",
    title: "Andie",
    code: "Danielsen",
    actualStartDate: new Date("11/6/2024"),
    actualEndDate: new Date("11/15/2024"),
    planStartDate: new Date("11/19/2024"),
    planEndDate: new Date("11/6/2024"),
    progress: 40,
    status: "adanielsenq",
    description: "Maroon",
    assignee: null
  }, {
    id: "AKT",
    title: "Robenia",
    code: "Di Antonio",
    actualStartDate: new Date("11/12/2024"),
    actualEndDate: new Date("11/9/2024"),
    planStartDate: new Date("11/26/2024"),
    planEndDate: new Date("11/14/2024"),
    progress: 3,
    status: "rdiantonior",
    description: "Purple",
    assignee: null
  }, {
    id: "ADL",
    title: "Jens",
    code: "Rivett",
    actualStartDate: new Date("11/16/2024"),
    actualEndDate: new Date("11/7/2024"),
    planStartDate: new Date("11/5/2024"),
    planEndDate: new Date("11/9/2024"),
    progress: 99,
    status: "jrivetts",
    description: "Red",
    assignee: null
  }, {
    id: "BPL",
    title: "Brynne",
    code: "Basire",
    actualStartDate: new Date("11/27/2024"),
    actualEndDate: new Date("11/18/2024"),
    planStartDate: new Date("11/11/2024"),
    planEndDate: new Date("11/19/2024"),
    progress: 40,
    status: "bbasiret",
    description: "Orange",
    assignee: null
  }, {
    id: "OXC",
    title: "Zachery",
    code: "Heskins",
    actualStartDate: new Date("11/16/2024"),
    actualEndDate: new Date("11/5/2024"),
    planStartDate: new Date("11/27/2024"),
    planEndDate: new Date("11/27/2024"),
    progress: 54,
    status: "zheskinsu",
    description: "Turquoise",
    assignee: null
  }, {
    id: "NUS",
    title: "Marley",
    code: "Caldayrou",
    actualStartDate: new Date("11/8/2024"),
    actualEndDate: new Date("11/4/2024"),
    planStartDate: new Date("11/22/2024"),
    planEndDate: new Date("11/29/2024"),
    progress: 8,
    status: "mcaldayrouv",
    description: "Fuscia",
    assignee: null
  }, {
    id: "SLB",
    title: "Babara",
    code: "Garmans",
    actualStartDate: new Date("11/19/2024"),
    actualEndDate: new Date("11/9/2024"),
    planStartDate: new Date("11/18/2024"),
    planEndDate: new Date("11/26/2024"),
    progress: 56,
    status: "bgarmansw",
    description: "Pink",
    assignee: null
  }, {
    id: "KSJ",
    title: "Nikola",
    code: "Ewell",
    actualStartDate: new Date("11/1/2024"),
    actualEndDate: new Date("11/12/2024"),
    planStartDate: new Date("11/4/2024"),
    planEndDate: new Date("11/21/2024"),
    progress: 37,
    status: "newellx",
    description: "Turquoise",
    assignee: null
  }, {
    id: "CIY",
    title: "Corey",
    code: "Snoden",
    actualStartDate: new Date("11/6/2024"),
    actualEndDate: new Date("11/17/2024"),
    planStartDate: new Date("11/1/2024"),
    planEndDate: new Date("11/25/2024"),
    progress: 68,
    status: "csnodeny",
    description: "Aquamarine",
    assignee: null
  }, {
    id: "ZSE",
    title: "Diandra",
    code: "Leathlay",
    actualStartDate: new Date("11/21/2024"),
    actualEndDate: new Date("11/25/2024"),
    planStartDate: new Date("11/5/2024"),
    planEndDate: new Date("11/6/2024"),
    progress: 98,
    status: "dleathlayz",
    description: "Pink",
    assignee: null
  }, {
    id: "YKZ",
    title: "Louisette",
    code: "Nix",
    actualStartDate: new Date("11/13/2024"),
    actualEndDate: new Date("11/23/2024"),
    planStartDate: new Date("11/20/2024"),
    planEndDate: new Date("11/4/2024"),
    progress: 14,
    status: "lnix10",
    description: "Maroon",
    assignee: null
  }, {
    id: "PMG",
    title: "Gilly",
    code: "Topliss",
    actualStartDate: new Date("11/4/2024"),
    actualEndDate: new Date("11/28/2024"),
    planStartDate: new Date("11/24/2024"),
    planEndDate: new Date("11/14/2024"),
    progress: 39,
    status: "gtopliss11",
    description: "Khaki",
    assignee: null
  }, {
    id: "CUD",
    title: "Duke",
    code: "O'Cannan",
    actualStartDate: new Date("11/11/2024"),
    actualEndDate: new Date("11/13/2024"),
    planStartDate: new Date("11/3/2024"),
    planEndDate: new Date("11/24/2024"),
    progress: 3,
    status: "docannan12",
    description: "Orange",
    assignee: null
  }, {
    id: "LBI",
    title: "Ursala",
    code: "Young",
    actualStartDate: new Date("11/8/2024"),
    actualEndDate: new Date("11/22/2024"),
    planStartDate: new Date("11/20/2024"),
    planEndDate: new Date("11/21/2024"),
    progress: 41,
    status: "uyoung13",
    description: "Goldenrod",
    assignee: null
  }, {
    id: "MCC",
    title: "Lexi",
    code: "Houson",
    actualStartDate: new Date("11/16/2024"),
    actualEndDate: new Date("11/24/2024"),
    planStartDate: new Date("11/29/2024"),
    planEndDate: new Date("11/28/2024"),
    progress: 39,
    status: "lhouson14",
    description: "Aquamarine",
    assignee: null
  }, {
    id: "SHZ",
    title: "Isobel",
    code: "Couvet",
    actualStartDate: new Date("11/19/2024"),
    actualEndDate: new Date("11/12/2024"),
    planStartDate: new Date("11/25/2024"),
    planEndDate: new Date("11/19/2024"),
    progress: 7,
    status: "icouvet15",
    description: "Turquoise",
    assignee: null
  }, {
    id: "ASX",
    title: "Birch",
    code: "Grishankov",
    actualStartDate: new Date("11/15/2024"),
    actualEndDate: new Date("11/17/2024"),
    planStartDate: new Date("11/20/2024"),
    planEndDate: new Date("11/8/2024"),
    progress: 19,
    status: "bgrishankov16",
    description: "Turquoise",
    assignee: null
  }, {
    id: "HTN",
    title: "Fionnula",
    code: "Morrell",
    actualStartDate: new Date("11/1/2024"),
    actualEndDate: new Date("11/21/2024"),
    planStartDate: new Date("11/5/2024"),
    planEndDate: new Date("11/21/2024"),
    progress: 8,
    status: "fmorrell17",
    description: "Violet",
    assignee: null
  }, {
    id: "JCU",
    title: "Garvey",
    code: "Clemont",
    actualStartDate: new Date("11/16/2024"),
    actualEndDate: new Date("11/1/2024"),
    planStartDate: new Date("11/22/2024"),
    planEndDate: new Date("11/13/2024"),
    progress: 5,
    status: "gclemont18",
    description: "Mauv",
    assignee: null
  }, {
    id: "MHB",
    title: "Stephana",
    code: "Readett",
    actualStartDate: new Date("11/14/2024"),
    actualEndDate: new Date("11/15/2024"),
    planStartDate: new Date("11/17/2024"),
    planEndDate: new Date("11/2/2024"),
    progress: 16,
    status: "sreadett19",
    description: "Blue",
    assignee: null
  }, {
    id: "OER",
    title: "Domenic",
    code: "Ghiraldi",
    actualStartDate: new Date("11/10/2024"),
    actualEndDate: new Date("11/21/2024"),
    planStartDate: new Date("11/23/2024"),
    planEndDate: new Date("11/3/2024"),
    progress: 82,
    status: "dghiraldi1a",
    description: "Mauv",
    assignee: null
  }, {
    id: "JAU",
    title: "Rowland",
    code: "Bacher",
    actualStartDate: new Date("11/16/2024"),
    actualEndDate: new Date("11/17/2024"),
    planStartDate: new Date("11/8/2024"),
    planEndDate: new Date("11/12/2024"),
    progress: 18,
    status: "rbacher1b",
    description: "Blue",
    assignee: null
  }, {
    id: "CRR",
    title: "Leslie",
    code: "Wilcot",
    actualStartDate: new Date("11/28/2024"),
    actualEndDate: new Date("11/14/2024"),
    planStartDate: new Date("11/29/2024"),
    planEndDate: new Date("11/28/2024"),
    progress: 25,
    status: "lwilcot1c",
    description: "Yellow",
    assignee: null
  }, {
    id: "ANU",
    title: "Ainslee",
    code: "Dewane",
    actualStartDate: new Date("11/15/2024"),
    actualEndDate: new Date("11/13/2024"),
    planStartDate: new Date("11/13/2024"),
    planEndDate: new Date("11/12/2024"),
    progress: 21,
    status: "adewane1d",
    description: "Orange",
    assignee: null
  }, {
    id: "AIE",
    title: "Kristien",
    code: "Dawby",
    actualStartDate: new Date("11/27/2024"),
    actualEndDate: new Date("11/16/2024"),
    planStartDate: new Date("11/7/2024"),
    planEndDate: new Date("11/24/2024"),
    progress: 58,
    status: "kdawby1e",
    description: "Yellow",
    assignee: null
  }, {
    id: "MHZ",
    title: "Silva",
    code: "Tremble",
    actualStartDate: new Date("11/6/2024"),
    actualEndDate: new Date("11/22/2024"),
    planStartDate: new Date("11/21/2024"),
    planEndDate: new Date("11/6/2024"),
    progress: 2,
    status: "stremble1f",
    description: "Teal",
    assignee: null
  }, {
    id: "BJP",
    title: "Brice",
    code: "Ewan",
    actualStartDate: new Date("11/1/2024"),
    actualEndDate: new Date("11/3/2024"),
    planStartDate: new Date("11/21/2024"),
    planEndDate: new Date("11/28/2024"),
    progress: 47,
    status: "bewan1g",
    description: "Pink",
    assignee: null
  }, {
    id: "IXL",
    title: "Reena",
    code: "Ellul",
    actualStartDate: new Date("11/24/2024"),
    actualEndDate: new Date("11/19/2024"),
    planStartDate: new Date("11/12/2024"),
    planEndDate: new Date("11/16/2024"),
    progress: 19,
    status: "rellul1h",
    description: "Fuscia",
    assignee: null
  }, {
    id: "TPP",
    title: "Nonah",
    code: "Parrett",
    actualStartDate: new Date("11/13/2024"),
    actualEndDate: new Date("11/21/2024"),
    planStartDate: new Date("11/1/2024"),
    planEndDate: new Date("11/9/2024"),
    progress: 36,
    status: "nparrett1i",
    description: "Crimson",
    assignee: null
  }, {
    id: "EBB",
    title: "Astrix",
    code: "Prover",
    actualStartDate: new Date("11/9/2024"),
    actualEndDate: new Date("11/1/2024"),
    planStartDate: new Date("11/26/2024"),
    planEndDate: new Date("11/11/2024"),
    progress: 39,
    status: "aprover1j",
    description: "Indigo",
    assignee: null
  }, {
    id: "PHT",
    title: "Cole",
    code: "Pammenter",
    actualStartDate: new Date("11/15/2024"),
    actualEndDate: new Date("11/20/2024"),
    planStartDate: new Date("11/12/2024"),
    planEndDate: new Date("11/14/2024"),
    progress: 52,
    status: "cpammenter1k",
    description: "Crimson",
    assignee: null
  }, {
    id: "NIS",
    title: "Ashien",
    code: "Staite",
    actualStartDate: new Date("11/15/2024"),
    actualEndDate: new Date("11/29/2024"),
    planStartDate: new Date("11/7/2024"),
    planEndDate: new Date("11/9/2024"),
    progress: 61,
    status: "astaite1l",
    description: "Mauv",
    assignee: null
  }, {
    id: "TRW",
    title: "Nessi",
    code: "Cosstick",
    actualStartDate: new Date("11/17/2024"),
    actualEndDate: new Date("11/12/2024"),
    planStartDate: new Date("11/19/2024"),
    planEndDate: new Date("11/7/2024"),
    progress: 7,
    status: "ncosstick1m",
    description: "Khaki",
    assignee: null
  }, {
    id: "TTU",
    title: "Britney",
    code: "Garfirth",
    actualStartDate: new Date("11/26/2024"),
    actualEndDate: new Date("11/9/2024"),
    planStartDate: new Date("11/28/2024"),
    planEndDate: new Date("11/18/2024"),
    progress: 94,
    status: "bgarfirth1n",
    description: "Pink",
    assignee: null
  }, {
    id: "PDX",
    title: "Berkley",
    code: "Damp",
    actualStartDate: new Date("11/8/2024"),
    actualEndDate: new Date("11/15/2024"),
    planStartDate: new Date("11/13/2024"),
    planEndDate: new Date("11/22/2024"),
    progress: 27,
    status: "bdamp1o",
    description: "Aquamarine",
    assignee: null
  }, {
    id: "FOR",
    title: "Waly",
    code: "Mordie",
    actualStartDate: new Date("11/4/2024"),
    actualEndDate: new Date("11/26/2024"),
    planStartDate: new Date("11/19/2024"),
    planEndDate: new Date("11/9/2024"),
    progress: 88,
    status: "wmordie1p",
    description: "Yellow",
    assignee: null
  }, {
    id: "SDT",
    title: "Erminie",
    code: "Hunnywell",
    actualStartDate: new Date("11/2/2024"),
    actualEndDate: new Date("11/26/2024"),
    planStartDate: new Date("11/23/2024"),
    planEndDate: new Date("11/25/2024"),
    progress: 39,
    status: "ehunnywell1q",
    description: "Goldenrod",
    assignee: null
  }, {
    id: "PEU",
    title: "Evvy",
    code: "Blakeman",
    actualStartDate: new Date("11/7/2024"),
    actualEndDate: new Date("11/1/2024"),
    planStartDate: new Date("11/12/2024"),
    planEndDate: new Date("11/28/2024"),
    progress: 82,
    status: "eblakeman1r",
    description: "Mauv",
    assignee: null
  }, {
    id: "LKD",
    title: "Leola",
    code: "Upfold",
    actualStartDate: new Date("11/28/2024"),
    actualEndDate: new Date("11/22/2024"),
    planStartDate: new Date("11/11/2024"),
    planEndDate: new Date("11/23/2024"),
    progress: 41,
    status: "lupfold1s",
    description: "Red",
    assignee: null
  }, {
    id: "TJC",
    title: "Lennie",
    code: "Sutcliffe",
    actualStartDate: new Date("11/25/2024"),
    actualEndDate: new Date("11/16/2024"),
    planStartDate: new Date("11/27/2024"),
    planEndDate: new Date("11/18/2024"),
    progress: 64,
    status: "lsutcliffe1t",
    description: "Fuscia",
    assignee: null
  }, {
    id: "ATP",
    title: "Valentijn",
    code: "MacGettigen",
    actualStartDate: new Date("11/23/2024"),
    actualEndDate: new Date("11/16/2024"),
    planStartDate: new Date("11/20/2024"),
    planEndDate: new Date("11/6/2024"),
    progress: 68,
    status: "vmacgettigen1u",
    description: "Puce",
    assignee: null
  }, {
    id: "ESO",
    title: "Laraine",
    code: "Labbet",
    actualStartDate: new Date("11/20/2024"),
    actualEndDate: new Date("11/14/2024"),
    planStartDate: new Date("11/28/2024"),
    planEndDate: new Date("11/16/2024"),
    progress: 16,
    status: "llabbet1v",
    description: "Aquamarine",
    assignee: null
  }, {
    id: "BIY",
    title: "Sydel",
    code: "Trower",
    actualStartDate: new Date("11/21/2024"),
    actualEndDate: new Date("11/26/2024"),
    planStartDate: new Date("11/25/2024"),
    planEndDate: new Date("11/15/2024"),
    progress: 52,
    status: "strower1w",
    description: "Crimson",
    assignee: null
  }, {
    id: "UPR",
    title: "Marco",
    code: "Hackey",
    actualStartDate: new Date("11/10/2024"),
    actualEndDate: new Date("11/3/2024"),
    planStartDate: new Date("11/26/2024"),
    planEndDate: new Date("11/24/2024"),
    progress: 5,
    status: "mhackey1x",
    description: "Puce",
    assignee: null
  }, {
    id: "GAD",
    title: "Paulita",
    code: "Boutellier",
    actualStartDate: new Date("11/21/2024"),
    actualEndDate: new Date("11/23/2024"),
    planStartDate: new Date("11/1/2024"),
    planEndDate: new Date("11/16/2024"),
    progress: 15,
    status: "pboutellier1y",
    description: "Puce",
    assignee: null
  }, {
    id: "LHG",
    title: "Ulrikaumeko",
    code: "Deeman",
    actualStartDate: new Date("11/7/2024"),
    actualEndDate: new Date("11/7/2024"),
    planStartDate: new Date("11/7/2024"),
    planEndDate: new Date("11/12/2024"),
    progress: 80,
    status: "udeeman1z",
    description: "Pink",
    assignee: null
  }, {
    id: "AHD",
    title: "Caryn",
    code: "Tyrwhitt",
    actualStartDate: new Date("11/19/2024"),
    actualEndDate: new Date("11/3/2024"),
    planStartDate: new Date("11/18/2024"),
    planEndDate: new Date("11/19/2024"),
    progress: 11,
    status: "ctyrwhitt20",
    description: "Turquoise",
    assignee: null
  }, {
    id: "SOE",
    title: "Kean",
    code: "Eakin",
    actualStartDate: new Date("11/5/2024"),
    actualEndDate: new Date("11/9/2024"),
    planStartDate: new Date("11/26/2024"),
    planEndDate: new Date("11/2/2024"),
    progress: 14,
    status: "keakin21",
    description: "Crimson",
    assignee: null
  }, {
    id: "BSL",
    title: "Elsinore",
    code: "Downs",
    actualStartDate: new Date("11/21/2024"),
    actualEndDate: new Date("11/11/2024"),
    planStartDate: new Date("11/19/2024"),
    planEndDate: new Date("11/27/2024"),
    progress: 8,
    status: "edowns22",
    description: "Crimson",
    assignee: null
  }, {
    id: "TPF",
    title: "Aharon",
    code: "Rigler",
    actualStartDate: new Date("11/1/2024"),
    actualEndDate: new Date("11/10/2024"),
    planStartDate: new Date("11/15/2024"),
    planEndDate: new Date("11/7/2024"),
    progress: 91,
    status: "arigler23",
    description: "Violet",
    assignee: null
  }, {
    id: "THQ",
    title: "Brenn",
    code: "Mussettini",
    actualStartDate: new Date("11/2/2024"),
    actualEndDate: new Date("11/20/2024"),
    planStartDate: new Date("11/17/2024"),
    planEndDate: new Date("11/19/2024"),
    progress: 3,
    status: "bmussettini24",
    description: "Indigo",
    assignee: null
  }, {
    id: "RIW",
    title: "Deedee",
    code: "Grombridge",
    actualStartDate: new Date("11/3/2024"),
    actualEndDate: new Date("11/10/2024"),
    planStartDate: new Date("11/28/2024"),
    planEndDate: new Date("11/14/2024"),
    progress: 69,
    status: "dgrombridge25",
    description: "Khaki",
    assignee: null
  }, {
    id: "OSP",
    title: "Crawford",
    code: "Broseke",
    actualStartDate: new Date("11/25/2024"),
    actualEndDate: new Date("11/20/2024"),
    planStartDate: new Date("11/17/2024"),
    planEndDate: new Date("11/5/2024"),
    progress: 26,
    status: "cbroseke26",
    description: "Yellow",
    assignee: null
  }, {
    id: "CBS",
    title: "Blair",
    code: "Simonaitis",
    actualStartDate: new Date("11/15/2024"),
    actualEndDate: new Date("11/28/2024"),
    planStartDate: new Date("11/13/2024"),
    planEndDate: new Date("11/29/2024"),
    progress: 34,
    status: "bsimonaitis27",
    description: "Khaki",
    assignee: null
  }, {
    id: "YYQ",
    title: "Major",
    code: "Roakes",
    actualStartDate: new Date("11/26/2024"),
    actualEndDate: new Date("11/10/2024"),
    planStartDate: new Date("11/21/2024"),
    planEndDate: new Date("11/26/2024"),
    progress: 78,
    status: "mroakes28",
    description: "Indigo",
    assignee: null
  }, {
    id: "QLP",
    title: "Winnie",
    code: "O'Rourke",
    actualStartDate: new Date("11/10/2024"),
    actualEndDate: new Date("11/29/2024"),
    planStartDate: new Date("11/20/2024"),
    planEndDate: new Date("11/13/2024"),
    progress: 90,
    status: "worourke29",
    description: "Maroon",
    assignee: null
  }, {
    id: "FLT",
    title: "Rozelle",
    code: "Richie",
    actualStartDate: new Date("11/27/2024"),
    actualEndDate: new Date("11/17/2024"),
    planStartDate: new Date("11/22/2024"),
    planEndDate: new Date("11/28/2024"),
    progress: 56,
    status: "rrichie2a",
    description: "Green",
    assignee: null
  }, {
    id: "IBA",
    title: "Cad",
    code: "Bellay",
    actualStartDate: new Date("11/18/2024"),
    actualEndDate: new Date("11/7/2024"),
    planStartDate: new Date("11/12/2024"),
    planEndDate: new Date("11/8/2024"),
    progress: 47,
    status: "cbellay2b",
    description: "Purple",
    assignee: null
  }, {
    id: "KAB",
    title: "Cobbie",
    code: "Gepp",
    actualStartDate: new Date("11/26/2024"),
    actualEndDate: new Date("11/23/2024"),
    planStartDate: new Date("11/2/2024"),
    planEndDate: new Date("11/23/2024"),
    progress: 80,
    status: "cgepp2c",
    description: "Blue",
    assignee: null
  }, {
    id: "SXM",
    title: "Delcina",
    code: "Prater",
    actualStartDate: new Date("11/8/2024"),
    actualEndDate: new Date("11/23/2024"),
    planStartDate: new Date("11/15/2024"),
    planEndDate: new Date("11/27/2024"),
    progress: 50,
    status: "dprater2d",
    description: "Mauv",
    assignee: null
  }, {
    id: "XAP",
    title: "Hodge",
    code: "Hannis",
    actualStartDate: new Date("11/11/2024"),
    actualEndDate: new Date("11/24/2024"),
    planStartDate: new Date("11/7/2024"),
    planEndDate: new Date("11/26/2024"),
    progress: 55,
    status: "hhannis2e",
    description: "Purple",
    assignee: null
  }, {
    id: "MMV",
    title: "Davin",
    code: "Reichelt",
    actualStartDate: new Date("11/15/2024"),
    actualEndDate: new Date("11/7/2024"),
    planStartDate: new Date("11/20/2024"),
    planEndDate: new Date("11/3/2024"),
    progress: 25,
    status: "dreichelt2f",
    description: "Purple",
    assignee: null
  }, {
    id: "LUI",
    title: "Alister",
    code: "Calveley",
    actualStartDate: new Date("11/18/2024"),
    actualEndDate: new Date("11/15/2024"),
    planStartDate: new Date("11/12/2024"),
    planEndDate: new Date("11/1/2024"),
    progress: 78,
    status: "acalveley2g",
    description: "Goldenrod",
    assignee: null
  }, {
    id: "ISI",
    title: "Olimpia",
    code: "Colin",
    actualStartDate: new Date("11/11/2024"),
    actualEndDate: new Date("11/13/2024"),
    planStartDate: new Date("11/19/2024"),
    planEndDate: new Date("11/5/2024"),
    progress: 3,
    status: "ocolin2h",
    description: "Khaki",
    assignee: null
  }, {
    id: "MPU",
    title: "Armin",
    code: "Hallifax",
    actualStartDate: new Date("11/26/2024"),
    actualEndDate: new Date("11/1/2024"),
    planStartDate: new Date("11/24/2024"),
    planEndDate: new Date("11/24/2024"),
    progress: 66,
    status: "ahallifax2i",
    description: "Purple",
    assignee: null
  }, {
    id: "OPF",
    title: "Louise",
    code: "Southway",
    actualStartDate: new Date("11/4/2024"),
    actualEndDate: new Date("11/15/2024"),
    planStartDate: new Date("11/14/2024"),
    planEndDate: new Date("11/28/2024"),
    progress: 48,
    status: "lsouthway2j",
    description: "Blue",
    assignee: null
  }, {
    id: "YFJ",
    title: "Anselm",
    code: "Pillington",
    actualStartDate: new Date("11/12/2024"),
    actualEndDate: new Date("11/25/2024"),
    planStartDate: new Date("11/26/2024"),
    planEndDate: new Date("11/11/2024"),
    progress: 44,
    status: "apillington2k",
    description: "Goldenrod",
    assignee: null
  }, {
    id: "SSC",
    title: "Erhard",
    code: "Reuss",
    actualStartDate: new Date("11/14/2024"),
    actualEndDate: new Date("11/23/2024"),
    planStartDate: new Date("11/19/2024"),
    planEndDate: new Date("11/22/2024"),
    progress: 45,
    status: "ereuss2l",
    description: "Orange",
    assignee: null
  }, {
    id: "AAS",
    title: "Ives",
    code: "Larner",
    actualStartDate: new Date("11/8/2024"),
    actualEndDate: new Date("11/16/2024"),
    planStartDate: new Date("11/26/2024"),
    planEndDate: new Date("11/19/2024"),
    progress: 14,
    status: "ilarner2m",
    description: "Green",
    assignee: null
  }, {
    id: "MVB",
    title: "Ahmad",
    code: "Makin",
    actualStartDate: new Date("11/17/2024"),
    actualEndDate: new Date("11/29/2024"),
    planStartDate: new Date("11/6/2024"),
    planEndDate: new Date("11/10/2024"),
    progress: 18,
    status: "amakin2n",
    description: "Violet",
    assignee: null
  }, {
    id: "BGV",
    title: "Bobby",
    code: "Fulloway",
    actualStartDate: new Date("11/6/2024"),
    actualEndDate: new Date("11/15/2024"),
    planStartDate: new Date("11/2/2024"),
    planEndDate: new Date("11/8/2024"),
    progress: 6,
    status: "bfulloway2o",
    description: "Maroon",
    assignee: null
  }, {
    id: "RCS",
    title: "Osborn",
    code: "Medcalf",
    actualStartDate: new Date("11/29/2024"),
    actualEndDate: new Date("11/8/2024"),
    planStartDate: new Date("11/16/2024"),
    planEndDate: new Date("11/2/2024"),
    progress: 98,
    status: "omedcalf2p",
    description: "Purple",
    assignee: null
  }, {
    id: "NSH",
    title: "Allyn",
    code: "Richley",
    actualStartDate: new Date("11/24/2024"),
    actualEndDate: new Date("11/4/2024"),
    planStartDate: new Date("11/17/2024"),
    planEndDate: new Date("11/5/2024"),
    progress: 41,
    status: "arichley2q",
    description: "Mauv",
    assignee: null
  }, {
    id: "KBA",
    title: "Maudie",
    code: "Woolham",
    actualStartDate: new Date("11/5/2024"),
    actualEndDate: new Date("11/24/2024"),
    planStartDate: new Date("11/24/2024"),
    planEndDate: new Date("11/11/2024"),
    progress: 97,
    status: "mwoolham2r",
    description: "Goldenrod",
    assignee: null
  }];
  connections: { x1: number; y1: number; x2: number; y2: number }[] = [];

  ngOnInit(): void {
    this.getTaskData();
    this.calculateConnections();
  }

  calculateConnections(): void {
    this.connections = [];

    this.tasks.forEach((task) => {
      if (task.dependencies) {
        task.dependencies.forEach((depId) => {
          const dependency = this.tasks.find((t) => t.id === depId);

          if (dependency) {
            const dependencyEndX = this.calculatePosition(dependency.actualStartDate!); // Mép phải task phụ thuộc
            const dependencyY = this.tasks.indexOf(dependency) * 40 + 20; // Tâm task phụ thuộc
            const taskStartX = this.calculatePosition(task.actualStartDate!); // Mép trái task hiện tại
            const taskY = this.tasks.indexOf(task) * 40 + 20; // Tâm task hiện tại

            // Đoạn ngang ra ngoài từ task phụ thuộc
            this.connections.push({
              x1: dependencyEndX,
              y1: dependencyY,
              x2: dependencyEndX + 20,
              y2: dependencyY
            });

            // Đoạn dọc xuống task hiện tại
            this.connections.push({
              x1: dependencyEndX + 20,
              y1: dependencyY,
              x2: dependencyEndX + 20,
              y2: taskY
            });

            // Đoạn ngang vào task hiện tại (đường kết thúc có mũi tên)
            this.connections.push({
              x1: dependencyEndX + 20,
              y1: taskY,
              x2: taskStartX,
              y2: taskY
            });
          }
        });
      }
    });
  }

  getChartWidth(): number {
    const days = this.getDaysInRange().length; // Số ngày trong phạm vi
    const pixelsPerDay = 40; // Mỗi ngày tương ứng 40px
    return days * pixelsPerDay;
  }

  getDaysInRange(): Date[] {
    const start = new Date(2024, 10, 1); // Ngày bắt đầu Gantt Chart
    const end = new Date(2024, 10, 30); // Ngày kết thúc Gantt Chart
    const days: Date[] = [];
    let current = start;

    while (current <= end) {
      days.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }

    return days;
  }

  calculatePosition(startDate: Date): number {
    const start = new Date(2024, 10, 1);
    const diff = (startDate.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);
    return diff * 40; // Mỗi ngày là 40px
  }

  calculateWidth(startDate: Date, endDate: Date): number {
    const diff = (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24);
    return (diff + 1) * 40; // Mỗi ngày là 40px
  }

  getTaskData(): void {
    // this.tasks = generateMockData(100);
  }
}
