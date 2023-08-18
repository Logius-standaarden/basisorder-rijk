var respecConfig = {
  useLogo: true,
  useLabel: true,
  license: "cc0",
  //voor specStatus mogelijkheden zie https://github.com/Logius-standaarden/respec/wiki/specStatus
  specStatus: "WV",
  //voor specType mogelijkheden zie https://github.com/Logius-standaarden/respec/wiki/specType
  specType: "HR",
  pubDomain: "ep",
  shortName: "basisorder-rijk",
  publishDate: "2023-08-18",
  publishVersion: "0.9.3",
  title: "Handreiking basisorder Rijk",
  previousPublishVersion: "0.9.2",
  previousPublishDate: "2023-08-17",
  previousMaturity: "WV",
  content:
    {
      "handreiking-basisorder-rijk": "",
      "overzicht-elementen-basisorder-rijk": "",
    },
  editors:
    [
      {
        name: "HR",
        company: "Logius",
        companyURL: "https://www.logius.nl",
      },
      {
        name: "MvB",
        company: "Logius",
        companyURL: "https://www.logius.nl",
      },
    ],
  authors:
    [
      {
        name: "Logius Standaarden - team e-procurement",
        company: "Logius",
        companyURL: "https://logius.nl/diensten/e-procurement",
      }
    ],
  github: "https://github.com/Logius-standaarden/ep-basisorder-rijk",

  // overwrite sotdText from organisationConfig
  sotdText: {
    nl: {
      sotd: "Status van dit document",
      def: "Dit is de definitieve versie van dit document. Wijzigingen naar aanleiding van consultaties zijn doorgevoerd.",
      wv: `Dit is een werkversie die op elk moment kan worden gewijzigd, verwijderd of vervangen door andere documenten. Het is geen door de EG Berichten en de EG eOrdering goedgekeurde consultatieversie.`,
      cv: `Dit is een door de EG Berichten en de EG eOrdering goedgekeurde consultatieversie. Commentaar over dit document kan gestuurd worden naar `,
      vv: `Dit is een definitief concept van de nieuwe versie van dit document. Wijzigingen naar aanleiding van consultaties zijn doorgevoerd.`,
      basis: "Dit is een document zonder offici&euml;le status.",
    },
    en: {
      sotd: "Status of This Document",
      def: `This is the definitive version of this document. Edits resulting from consultations have been applied.`,
      wv: `This is a draft that could be altered, removed or replaced by other documents. It is not a recommendation approved by the TC Berichten and the TC eOrdering.`,
      cv: `This is a proposed recommendation approved by the TC Berichten and the TC eOrdering. Comments regarding this document may be sent to `,
      vv: `This is the definitive concept of this document. Edits resulting from consultations have been applied.`,
      basis: "This document has no official standing.",
    },
  },

  // Controls if linked "§" section markers are added to a document
  addSectionLinks: true,

  // this parameter will add the tag_name of the latest release to the document Title
  // only set this parameter when a release has been set
  nl_addReleaseTagTitle: false,

  // if nl_markdownEmbedImageInFigure is set to true images in markdown generated content will be surrounded with <figures> element
  // so that figures can be linked are be a part of table of figures
  nl_markdownEmbedImageInFigure: true,

  // Create PDF and link to file in header:
  alternateFormats: [
    {
      label: "pdf",
      uri: "handreiking-basisorder-rijk-v0.9.2.pdf",
    },
  ],
};
