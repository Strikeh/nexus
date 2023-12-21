import { AfterViewInit, Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

type TeamMember = {
  name: string;
  image: string;
  popup: string;
  linkedIn?: string;
  facebook?: string;
  telegram?: string;
  position?: string;
  description1?: string;
  description2?: string;
};

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent implements AfterViewInit {
  developers: TeamMember[] = [];
  communicationMembers: TeamMember[] = [];
  impressionMembers: TeamMember[] = [];
  interactionMembers: TeamMember[] = [];
  relationshipMembers: TeamMember[] = [];
  embassyMembers: TeamMember[] = [];
  jurorMembers: TeamMember[] = [];
  mediaMembers: TeamMember[] = [];

  constructor(private readonly meta: Meta, private readonly title: Title) {
    this.meta.addTags([
      { name: 'description', content: 'Team' },
      { name: 'author', content: 'Christophe Verheyen' },
      {
        name: 'keywords',
        content:
          'nexus, crypto, blockchain, web3, Team, founder, developers, ambassadors, embassies, mission, vision, jurors',
      },
    ]);
    this.setTitle('Nexus - Team');
  }

  setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }

  ngOnInit() {
    this.fillDevelopers();
    this.fillCommunicationMembers();
    this.fillImpressionMembers();
    this.fillInteractionsMembers();
    this.fillRelationshipMembers();
    this.fillMediaMembers();
    this.fillEmbassyMembers();
    this.fillJurorMembers();
  }

  private fillJurorMembers(): void {
    this.jurorMembers = [
      {
        name: 'Arron Hill',
        image: 'arron2',
        popup: 'arron-juror',
        position: 'Jury Chair',
        description1: `I'm a manager at a solar company, so my daily job is pretty balanced between technical thinking and management. I've been watching crypto from the sideline since the earliest days of BTC. I lead a community here in AZ that Colin is a part of, and I got really interested in NXS through him about a year ago. I joined the Nexus community a few months ago b/c I felt ready to participate more actively. I have formal training to mediate conflict and I teach classes on conflict resolution to my community.`,
      },
      {
        name: 'Barak Epstein (B12)',
        image: 'silhouette2',
        popup: 'barak-juror',
        position: 'Juror',
        description1: `I’m a pianist who decided to live in South America many years ago. I was Introduced to nexus back in 2017 and sadly watching the crypto market evolving and taken over by Moon boys and banksters. I have hope that one day nexus will shine and unfold the original satoshi vision to free the planet from the modern slavery system.`,
      },
      {
        name: 'Craig (BUMP)',
        image: 'bump2',
        popup: 'craig-juror',
        position: 'Juror',
        description1: `I am a pilot operating for an airline in Australia.`,
        telegram: 'https://t.me/BumpaC',
      },
      {
        name: 'Shae',
        image: 'shae',
        popup: 'shae-juror',
        position: 'Juror',
        description1: `My name is Shae, I'm from Australia and I am passionate about Nexus and its ambitious mission to provide the world with new and more efficient technologies to help re-create the internet and provide humanity with financial independence and sovereignty. 
 
        I have spent most of my years working as a support worker within the aged-care industry which has allowed me to better connect and empathise with people from all walks of life and abilities and to develop the necessary skills to manage and mediate between various challenging situations. I now work from home as an artist as my passion is to explore the mysteries and nature of our reality whilst creating artwork that reflects the insights and experiences of life.  
        I aim to bring my life skills into Nexus, to help this project grow and overcome challenges as they come.`,
        telegram: 'https://t.me/Shae_sp',
      },
      {
        name: 'Tasha Lindsay (Tish)',
        image: 'silhouette2',
        popup: 'tish-juror',
        position: 'Juror',
        description1: `I am an artist, musician, set theory researcher and eternal student. My greatest passion is an obscure mathematical curiosity called “magic squares” and their healing effects on the human brain. 

        I got involved in Nexus because I truly believe in this projects potential to unite people from around the world under a common goal and common set of needs. Humanity working together to find innovative solutions to our collective problems will advance our species in ways we have, thus far, only dreamed of.`,
      },
      {
        name: 'Chuck scholer',
        image: 'silhouette2',
        popup: 'chuck-juror',
        position: 'Juror',
        description1: `I have been involved in Nexus since early 2017. I retired from the US Navy back in 2001 as an electronics technician. Now I teach math at a private Christian school in Las Vegas, which my two children attended. My interest is more in the technical development of Nexus, satellites, routers, etc., but I follow everything related to it and read through Telegram every day.
        I plant the seeds of Nexus by making, funding, and gifting wallets to my interested scholars as graduation presents.`,
      },
      {
        name: 'Frank The good and wise',
        image: 'silhouette2',
        popup: 'frank-juror',
        position: 'Juror',
        description1: `I was introduced to NEXUS and Colin at a meeting in 04-2017. We literally shared a lunch and found we had mutual thoughts and social issues. I was an attendee at 2017 Aspen conference and 2018 conference. We have a small group here in beautiful SW USA Las Vegas and a VGK Hockey fan.

        With our group we have created and funded mini wallets as an attempt to create interest in Nexus to have a wallet on a free computer. Someday my dream is to feed the world for free . I believe in honesty, integrity, and honor and try to conduct myself as such.`,
      },
    ];
  }

  private fillEmbassyMembers(): void {
    this.embassyMembers = [
      {
        name: 'Colin Cantrell',
        image: 'colin2',
        popup: 'colin-embassy',
        position: 'Judical Coordinator',
        description1: `Colin Cantrell is a software architect, engineer,
                          musician and composer. Having been raised in the
                          aerospace industry, he took up programming at the age
                          of 11, and was helping to build rockets by the age of
                          16. Through these combined interests, in 2014 Nexus
                          was born, bringing together technologies to promote a
                          greater distribution of resources and communication.
                          His ultimate vision is to increase the accessibility
                          of these technologies in order to help people to build
                          a greater connection to one another.`,
        telegram: 'https://t.me/Videlicet',
      },
      {
        name: 'Philip Lee',
        image: 'phil2',
        popup: 'phil-embassy',
        position: 'Judical Coordinator',
        description1: ``,
        telegram: 'https://t.me/sleepingboodah',
      },
    ];
  }

  private fillRelationshipMembers(): void {
    this.relationshipMembers = [
      {
        name: 'Sohaan',
        image: 'sohaan2',
        popup: 'sohaan-member',
        position: 'Relationships Chair - No-Code & Tokenomics Support',
        description1: `Sohaan is one of the 100 influential people in noCode
        movement. He graduated in Game design & whilst doing
        so he got into bitcoin mining back in 2011 & got
        hooked on blockchain, cryptocurrency ever since.
        Sohaan has spent a decade consulting various startups
        across the world for UI/UX design as well as
        advocating tokenization and gamification. His goal is
        to foster peace & harmony amongst humanity using web
        3.0 and DeFi.`,
        telegram: 'https://t.me/Sohaan0077',
      },
      // {
      //   name: 'Richard Osborne',
      //   image: 'richard2',
      //   popup: 'richard-member',
      //   position: 'Usecase Development Support',
      //   description1: `Richard is a long-time no-code and low-code web
      //   developer, creating web and mobile applications and
      //   excited about creating future dapps`,
      // },
      {
        name: 'Neal Helman',
        image: 'neal2',
        popup: 'neal-member',
        position: 'Support Facilitator',
        description1: ``,
        telegram: 'https://t.me/nhelman64',
      },
      {
        name: 'Chris',
        image: 'silhouette2',
        popup: 'chris-member',
        position: 'Coordination Facilitator',
        description1: ``,
        telegram: 'https://t.me/Cheemskerk',
      },
      {
        name: 'Philip Lee',
        image: 'phil2',
        popup: 'phil-member',
        position: 'Community Facilitator',
        description1: `Philip Lee, registered nurse, attorney and founder of
        Project Phoenix, seeks to add the human component to
        Nexus blockchain technology. Volunteers as a Nexus
        Ambassador, constantly searching for ways to
        incorporate Nexus into everyday life in a way that
        helps the community, in order to gain trust that will
        lead to worldwide adoption. He believes that a system
        which incentivizes cooperation over competition is the
        way of the new world.`,
        telegram: 'https://t.me/sleepingboodah',
      },
      {
        name: 'Tash Anestos',
        image: 'tash2',
        popup: 'tash-member',
        position: 'Advisor',
        description1: `Tash Anestos, Director of Business Operations &
        Planning for Intel Corp and 24 year veteran in the
        technology sector, joined the Nexus community in 2017
        where he currently volunteers as a Nexus Ambassador,
        contributing to Nexus' vision of a decentralized world
        through his wealth of experience, business acumen, and
        passion for blockchain technology.`,
        telegram: 'https://t.me/Tash_A77',
      },
    ];
  }

  private fillInteractionsMembers(): void {
    this.interactionMembers = [
      {
        position: 'Interactions Chair ',
        name: 'Miguel Franco',
        image: 'miguel2',
        popup: 'miguel-member',
        description1: `I discovered cryptocurrencies in 2020, I think that
        from that day my life changed. As an engineer I'm
        fascinated because I am a lover of technology, and
        from that date I began my journey in search of the
        perfect blockchain. I discovered nexus at the end of
        the year 2020, and at that moment I understood this,
        the world will not be the same after the nexus
        protocol is implemented. I am a technology lover and I
        am convinced that nexus has the capacity to bring
        well-being and power to the masses. Nexus makes us
        free and I will always try to be there to help you and
        show you the way. I invite you to have an open mind
        and accept that the world can and should be better and
        that nexus will take care of it. This community is not
        to empower a single person, this community is to give
        well-being to all equally. Remember we are all Nexus.`,
        telegram: 'https://t.me/mikhealfranco14',
      },
      {
        name: 'Emmanuel Ramos',
        image: 'emmanuel2',
        popup: 'emmanuel-member',
        position: 'SM Facilitator',
        description1: ``,
      },
    ];
  }

  private fillImpressionMembers(): void {
    this.impressionMembers = [
      {
        name: 'Christophe Verheyen',
        image: 'christophe2',
        popup: 'christophe-member',
        position: 'Impressions Chair & Frontend Developer',
        description1: ``,
        telegram: 'https://t.me/christophe1982',
      },
      {
        name: 'Tommie',
        image: 'tommie2',
        popup: 'tommie-member',
        position: 'Advertising',
        description1: ``,
        telegram: 'https://t.me/tommievictor',
      },
    ];
  }

  private fillDevelopers(): void {
    this.developers = [
      {
        name: 'Colin Cantrell',
        image: 'colin2',
        popup: 'colin-dev',
        position: 'Lead Developer',
        description1: `Colin Cantrell is a software architect, engineer,
                          musician and composer. Having been raised in the
                          aerospace industry, he took up programming at the age
                          of 11, and was helping to build rockets by the age of
                          16. Through these combined interests, in 2014 Nexus
                          was born, bringing together technologies to promote a
                          greater distribution of resources and communication.
                          His ultimate vision is to increase the accessibility
                          of these technologies in order to help people to build
                          a greater connection to one another.`,
        telegram: 'https://t.me/Videlicet',
      },
      {
        name: 'Kendal Cormany',
        image: 'kendal2',
        popup: 'kendal-dev',
        position: 'Developer',
        description1: `Kendal graduated in 2012 with a BA of Science and has
                          since programmed and release apps and games on
                          multitude platforms including: PC/Mac, Web,
                          IOS/Android, Steam, and even the Playstation Network.
                          He has most of his experience in Unity 3D creating
                          apps/games in both 2D and 3D. Kendal started coding at
                          a young age “modding” games and using GameMaker to
                          write his own games. He practices building and
                          breaking things in order to better understand how they
                          work, often figuring out how the user will break it
                          before they even try. Kendal hopes his contributions
                          towards Nexus will usher in a new way systems interact
                          with other systems. In his spare time he likes to play
                          games and build plastic models.`,
        telegram: 'https://t.me/KendalCormany_nexusio',
      },
      {
        name: 'Hoàng Phú Quý',
        image: 'krysto2',
        popup: 'krysto-dev',
        position: 'Developer',
        description1: `krysto Quý (Krysto) began his interest in software
                          development when he first learned programming in
                          school at the age of 12, where he won high prizes in
                          programming competitions. Since then, Quý has
                          graduated from FPT University with a First Class
                          Honours Bachelor’s Degree in Software Engineering. Quý
                          first got involved in the crypto world when he joined
                          NEM in their early days (2014), and helped to develop
                          their first wallet. He worked for several startup
                          companies before joining Nexus. Quý joined Nexus as he
                          sees the project as one of the most technologically
                          advanced in the crypto sphere, that has the potential
                          to take a leading position in the future, and believes
                          he brings many skills and experience to the team. In
                          his free time, Quý enjoys music, dancing, and playing
                          board games with friends.`,
        telegram: 'https://t.me/kwyiz',
      },
      // {
      //   name: 'Ajion',
      //   image: 'ajion2',
      //   popup: 'ajion-dev',
      //   position: 'Developer',
      //   description1: `Ajion is a UI/UX engineer, since 1997, when modems
      //                     ruled the world, "notepad coding" was L33t and nuking
      //                     IPs was a thing. He is passionate about data
      //                     visualization, machine learning and creating awesome
      //                     user interfaces, even after 10 years in the Corporate
      //                     Financial Sector. He discovered Nexus in late 2017.
      //                     And in 2021, he joined Nexus and their mission for a
      //                     space faring decentralized world. Additionally, he is
      //                     fascinated with financial fractal patterns and you
      //                     might have seen some of his work on Tradingview.`,
      // },
    ];
  }

  private fillCommunicationMembers(): void {
    this.communicationMembers = [
      {
        name: 'Tomas Gaia',
        image: 'silhouette2',
        popup: 'tomas-member',
        position: 'Communications Chair',
        description1: ``,
        telegram: 'https://t.me/Tomas_SWE',
      },
      {
        name: 'Arielle Friedman',
        image: 'arielle2',
        popup: 'arielle-member',
        position: 'Communicator',
        description1: ``,
      },
      {
        name: 'Don Karl',
        image: 'karl2',
        popup: 'karl-member',
        position: 'Communicator',
        description1: ``,
      },
    ];
  }

  private fillMediaMembers(): void {
    this.mediaMembers = [
      {
        name: 'Stijn Ottevaere',
        image: 'stijn2',
        popup: 'stijn-member',
        position: 'Media Chair & 2D/3D Graphics',
        description1: `I'm a creative mind with a passion for Design, Nature, Sports & Crypto. 
        Involved with Nexus since 2017! 
        As an Industrial Product Designer I understand very well how important the UX is! 
        Signature chains are a very unique USP that will be key for mass adoption. 
        I'm happy to share our vision. We are all in this together!`,
        telegram: 'https://t.me/MrWoXIV',
      },
      {
        name: 'Aflatun Abdullayev',
        image: 'aflatun2',
        popup: 'aflatun-member',
        position: 'Videographer',
        description1: ``,
      },
      {
        name: 'Elvina Alakbarova',
        image: 'elvina2',
        popup: 'elvina-member',
        position: 'Film & Script',
        description1: `Elvina Alakbarova was born in 1985 in Baku, Azerbaijan. While studying Translation at the Baku Slavic University, she worked as a freelance translator of feature films and TV series. In 2010, she studied Language and Culture at Linkoping University in Sweden. From 2011-2014, she continues her linguistic studies at the University of Vienna, Austria. In 2014-2019, she worked as a financial translator in Denizbank, Vienna. In 2020, she started her writing career besides her activity in translation projects. Her first feature film script, One Corner of the World, was a finalist in Oaxaca Film Festival in Mexico in February 2021 and won the best Screenplay award in Turkey in November 2021. Furthermore, her second screenplay, â€œEternal Dilemma,â€� has been nominated as the Best Screenplay in five film festivals. Starting from January 2022, she has been working as a screenwriter and content creator for Nexus US Media.`,
      },
      {
        name: 'Levente Kovacs',
        image: 'levente2',
        popup: 'levente-member',
        position: '3D Graphics',
        description1: ``,
        telegram: 'https://t.me/Themadblacksmith',
      },
      {
        name: 'Alec Rappelet',
        image: 'alec2',
        popup: 'alec-member',
        position: '2D Graphics',
        description1: ``,
      },
    ];
  }

  ngAfterViewInit(): void {
    var $content_popup = $('.content-popup');
    var $body = $('body');

    if ((<any>$content_popup).exists()) {
      $content_popup.each(function () {
        var overlay = $(this).data('overlay');
        var setOverlay =
          typeof overlay !== 'undefined' && overlay ? overlay : '';
        (<any>$(this)).magnificPopup({
          type: 'inline',
          preloader: true,
          removalDelay: 400,
          mainClass: 'mfp-fade content-popup ' + setOverlay,
          callbacks: {
            open: function () {
              $body.addClass('mfp-opened');
            },
            close: function () {
              $body.removeClass('mfp-opened');
            },
          },
        });
      });
    }
  }
}
