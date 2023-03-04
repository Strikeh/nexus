import { AfterViewInit, Component } from '@angular/core';

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
        image: 'arron',
        popup: 'arron-juror',
        position: 'Jury Chair',
        description1: `I'm a manager at a solar company, so my daily job is pretty balanced between technical thinking and management. I've been watching crypto from the sideline since the earliest days of BTC. I lead a community here in AZ that Colin is a part of, and I got really interested in NXS through him about a year ago. I joined the Nexus community a few months ago b/c I felt ready to participate more actively. I have formal training to mediate conflict and I teach classes on conflict resolution to my community.`,
      },
      {
        name: 'Barak (B12)',
        image: 'silhouette',
        popup: 'barak-juror',
        position: 'Juror',
        description1: `I’m a nomad pianist decided to live in South America many years ago. Introduced to nexus back in 2017 and sadly watching the shit market evolving and taken over by Moon boys and banksters. I have hope that one day nexus will shine and unfold the original satoshi vision to free the planet from the modern slavery system.`,
      },
      {
        name: 'Vincent (AUGUST2022)',
        image: 'silhouette',
        popup: 'vincent-juror',
        position: 'Juror',
        description1: `I am broke developer with 24 years experience, love my family and town and all people in it, In blockchain since beginning, with nexus since coinshield, I done many good code for the world that is used today, I dont like names and have probably more than 5000 names I have used on internet since 😂 I love Nexus and wish I have time to work on it.`,
      },
      {
        name: 'Craig (BUMP)',
        image: 'bump',
        popup: 'craig-juror',
        position: 'Juror',
        description1: `I am a pilot operating for an airline in Australia.`,
      },
    ];
  }

  private fillEmbassyMembers(): void {
    this.embassyMembers = [
      {
        name: 'Colin Cantrell',
        image: 'colin',
        popup: 'colin-embassy',
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
      },
      {
        name: 'Carolyn Sechler',
        image: 'carolyn',
        popup: 'carolyn-embassy',
        position: 'US Embassy Board Of Directors',
        description1: ``,
      },
    ];
  }

  private fillRelationshipMembers(): void {
    this.relationshipMembers = [
      {
        name: 'Sohaan',
        image: 'sohaan',
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
      },
      {
        name: 'Richard Osborne',
        image: 'richard',
        popup: 'richard-member',
        position: 'Usecase Development Support',
        description1: `Richard is a long-time no-code and low-code web
        developer, creating web and mobile applications and
        excited about creating future dapps`,
      },
      {
        name: 'Chris',
        image: 'silhouette',
        popup: 'chris-member',
        position: 'Coordination Facilitator',
        description1: ``,
      },
      {
        name: 'Philip Lee',
        image: 'phil',
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
      },
      {
        name: 'Tash Anestos',
        image: 'tash',
        popup: 'tash-member',
        position: 'Advisor',
        description1: `Tash Anestos, Director of Business Operations &
        Planning for Intel Corp and 24 year veteran in the
        technology sector, joined the Nexus community in 2017
        where he currently volunteers as a Nexus Ambassador,
        contributing to Nexus' vision of a decentralized world
        through his wealth of experience, business acumen, and
        passion for blockchain technology.`,
      },
    ];
  }

  private fillInteractionsMembers(): void {
    this.interactionMembers = [
      {
        name: 'Katarzyna Ochnio',
        image: 'kat',
        popup: 'kat-member',
        position:
          'Interactions Chair & International Socal Media Network Facilitator',
        description1: `I have been a staunch supporter of Nexus for many
        years in Poland. Jumped into Nexus after hearing about
        it in 2016 and joined the project shortly after
        learning about Bitcoin. Beautiful vision close to my
        heart, technologically ahead of others. Nexus puts the
        world into the hands of people, gives a sense of
        responsibility and freedom. I share these values with
        others, building local communities. Now I am working
        with a team supporting the new social architecture and
        reaching out and educating people about Nexus all over
        the world.`,
      },
      {
        name: 'Arun Pais',
        image: 'arun',
        popup: 'arun-member',
        position: 'Developer Support Facilitator',
        description1: ` Having completed formal education in Electrical
        Engineering was drawn towards Bitcoin in early 2017.
        Liked the concept and ethos, took a deep dive which
        increased awareness about money and economics and the
        threat of emerging technologies whose convergence is
        pushing us further into the fully centralised digital
        realm.`,
        description2: `I am a staunch believer that blockchain will be the
        foundation of our digital future and the decisions we
        make today will shape our future. Having delved into
        blockchain projects to find the one which has the
        vision and ideology of Sathoshi, and also decentralize
        and democratize money, economics, internet, emerging
        technologies to give people back the power, led me to
        Nexus and there has been no looking back. Using this
        opportunity to spread Nexus and its innovative
        technology to the masses.`,
      },
      {
        name: 'Neal Helman',
        image: 'neal',
        popup: 'neal-member',
        position: 'Support Facilitator',
        description1: ``,
      },
      {
        name: 'Robert Kolec',
        image: 'robert',
        popup: 'robert-member',
        position: 'Support',
        description1: `I'm fascinated by the technology and possibilities of
        Nexus. As a member of the community, began to actively
        participate in building the foundations of the DAO. I
        love traveling and good cuisine.`,
      },
      {
        name: 'Rayan Fernandes',
        image: 'rayan',
        popup: 'rayan-member',
        position: 'Developer Support',
        description1: `I'm an Electronics & Communication Engineer and have
        been working as a full stack software developer. Been
        looking at crypto-space since 2017 BTC hype. Got
        introduced to Nexus in 2021 and have been involved in
        learning more. Love the core vision, power and
        simplicity. Currently Working on a few projects of my
        own on Nexus and giving my support in the community. I
        also like to create 3D artwork, code bots and learn
        musical instruments in my spare time.`,
      },
      {
        name: 'Marek Szklarz',
        image: 'marek',
        popup: 'marek-member',
        position: 'ISMN Graphic Design',
        description1: ``,
      },
      {
        name: 'Miguel Franco',
        image: 'miguel',
        popup: 'miguel-member',
        position: 'SM Team',
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
      },
      {
        name: 'Emmanuel Ramos',
        image: 'emmanuel',
        popup: 'emmanuel-member',
        position: 'SM Facilitator',
        description1: ``,
      },
      {
        name: 'Mark Costa',
        image: 'mark',
        popup: 'mark-member',
        position: 'ISMN Australia & New Zealand',
        description1: ``,
      },
      {
        name: 'Anichebe Osuta',
        image: 'anichebe',
        popup: 'anichebe-member',
        position: 'ISMN Nigeria',
        description1: ``,
      },
    ];
  }

  private fillImpressionMembers(): void {
    this.impressionMembers = [
      {
        name: 'Christophe Verheyen',
        image: 'christophe',
        popup: 'christophe-member',
        position: 'Impressions Chair & Frontend Developer',
        description1: ``,
      },
      {
        name: 'Tommie',
        image: 'tommie',
        popup: 'tommie-member',
        position: 'Advertising',
        description1: ``,
      },
    ];
  }

  private fillDevelopers(): void {
    this.developers = [
      {
        name: 'Colin Cantrell',
        image: 'colin',
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
      },
      {
        name: 'Kendal Cormany',
        image: 'kendal',
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
      },
      {
        name: 'Hoàng Phú Quý',
        image: 'krysto',
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
      },
      {
        name: 'Ajion',
        image: 'ajion',
        popup: 'ajion-dev',
        position: 'Developer',
        description1: `Ajion is a UI/UX engineer, since 1997, when modems
                          ruled the world, "notepad coding" was L33t and nuking
                          IPs was a thing. He is passionate about data
                          visualization, machine learning and creating awesome
                          user interfaces, even after 10 years in the Corporate
                          Financial Sector. He discovered Nexus in late 2017.
                          And in 2021, he joined Nexus and their mission for a
                          space faring decentralized world. Additionally, he is
                          fascinated with financial fractal patterns and you
                          might have seen some of his work on Tradingview.`,
      },
    ];
  }

  private fillCommunicationMembers(): void {
    this.communicationMembers = [
      {
        name: 'Tomas Gaia',
        image: 'tomas',
        popup: 'tomas-member',
        position: 'Communications Chair',
        description1: ``,
      },
      {
        name: 'Arielle Friedman',
        image: 'arielle',
        popup: 'arielle-member',
        position: 'Communicator',
        description1: ``,
      },
      {
        name: 'Karl Don',
        image: 'karl',
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
        image: 'stijn',
        popup: 'stijn-member',
        position: 'Media Chair & 2D/3D Graphics',
        description1: `I'm a creative mind with a passion for Design, Nature, Sports & Crypto. 
        Involved with Nexus since 2017! 
        As an Industrial Product Designer I understand very well how important the UX is! 
        Signature chains are a very unique USP that will be key for mass adoption. 
        I'm happy to share our vision. We are all in this together!`,
      },
      {
        name: 'Aflatun Abdullayev',
        image: 'aflatun',
        popup: 'aflatun-member',
        position: 'Videographer',
        description1: ``,
      },
      {
        name: 'Elvina Alakbarova',
        image: 'elvina',
        popup: 'elvina-member',
        position: 'Film & Script',
        description1: `Elvina Alakbarova was born in 1985 in Baku, Azerbaijan. While studying Translation at the Baku Slavic University, she worked as a freelance translator of feature films and TV series. In 2010, she studied Language and Culture at Linkoping University in Sweden. From 2011-2014, she continues her linguistic studies at the University of Vienna, Austria. In 2014-2019, she worked as a financial translator in Denizbank, Vienna. In 2020, she started her writing career besides her activity in translation projects. Her first feature film script, One Corner of the World, was a finalist in Oaxaca Film Festival in Mexico in February 2021 and won the best Screenplay award in Turkey in November 2021. Furthermore, her second screenplay, â€œEternal Dilemma,â€� has been nominated as the Best Screenplay in five film festivals. Starting from January 2022, she has been working as a screenwriter and content creator for Nexus US Media.`,
      },
      {
        name: 'Levente Kovacs',
        image: 'levente',
        popup: 'levente-member',
        position: '3D Graphics',
        description1: ``,
      },
      {
        name: 'Alec Rappelet',
        image: 'alec',
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
