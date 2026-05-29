// src/constants/themes.js
export const themes = {
  'deep-space': {
    name: 'Deep Space 🚀',
    appBg: 'bg-gradient-to-br from-black via-indigo-950 to-purple-950',
    navBg: 'bg-gray-950 bg-opacity-80',
    navBorder: 'border-indigo-500/50',
    sectionBg: 'bg-gray-900',
    sectionBgTranslucent: 'bg-gray-900/70',
    homeSectionBg: 'bg-gradient-to-br from-gray-800 via-indigo-950 to-black',
    contactSectionBg: 'bg-gradient-to-br from-gray-950 to-black',

    textDefault: 'text-indigo-200',
    textSubtle: 'text-indigo-300',
    textCardDescription: 'text-indigo-400',
    textSkillName: 'text-indigo-100',
    primaryAccentText: 'text-purple-400',
    secondaryAccentText: 'text-cyan-400',
    primaryAccentTextSubtle: 'text-purple-300',

    headingGradientFrom: 'from-indigo-400',
    headingGradientTo: 'to-cyan-400',
    headingGradientFromSecondary: 'from-cyan-400',
    headingGradientToSecondary: 'to-indigo-400',

    buttonPrimaryBgFrom: 'from-indigo-600',
    buttonPrimaryBgTo: 'to-purple-700',
    buttonPrimaryHoverBgFrom: 'hover:from-indigo-700',
    buttonPrimaryHoverBgTo: 'hover:to-purple-800',
    buttonPrimaryBeforeFrom: 'from-indigo-400',
    buttonPrimaryBeforeTo: 'to-purple-500',
    buttonPrimaryText: 'text-white',

    buttonSecondaryBgFrom: 'from-cyan-600',
    buttonSecondaryBgTo: 'to-indigo-700',
    buttonSecondaryHoverBgFrom: 'hover:from-cyan-700',
    buttonSecondaryHoverBgTo: 'hover:to-indigo-800',
    buttonSecondaryBeforeFrom: 'from-cyan-400',
    buttonSecondaryBeforeTo: 'to-indigo-500',
    buttonSecondaryText: 'text-white',

    navButtonHoverBg: 'hover:bg-indigo-800/60',
    navActiveBg: 'bg-indigo-900/40',
    navActiveBorder: 'border-indigo-500/60',
    navActiveShadow: 'shadow-indigo-500/30',

    cardBg: 'bg-gray-900',
    cardBorder: 'border-indigo-700/30',
    cardShadow: 'shadow-lg shadow-indigo-900/30',
    cardHoverShadow: 'hover:shadow-2xl hover:shadow-indigo-700/50',
    cardHoverBorder: 'hover:border-indigo-500/50',

    imageBorder: 'border-indigo-500',
    imageShadow: 'shadow-indigo-500/40',

    footerBg: 'bg-black',
    footerText: 'text-indigo-500',
    footerBorder: 'border-indigo-800/60',

    skillIconColor: (index) => {
      if (index % 3 === 0) return 'text-indigo-400 group-hover:text-cyan-400';
      if (index % 3 === 1) return 'text-purple-400 group-hover:text-indigo-400';
      return 'text-cyan-400 group-hover:text-purple-400';
    },

    cursorDefault: 'rgba(99, 102, 241, 0.6)',
    cursorNav: 'rgba(192, 132, 252, 0.6)',
    cursorSkill: 'rgba(6, 182, 212, 0.6)',
    cursorProject: 'rgba(167, 139, 250, 0.6)',
    cursorContact: 'rgba(236, 72, 153, 0.6)',
    cursorLink: 'rgba(56, 189, 248, 0.6)',
    cursorAI: 'rgba(129, 140, 248, 0.6)',

    linkTextAccent: 'text-cyan-400',
    linkHoverTextAccent: 'hover:text-cyan-300',
    socialLinkHoverPrimary: 'hover:text-indigo-400',
    socialLinkHoverSecondary: 'hover:text-purple-400',
    socialLinkHoverTertiary: 'hover:text-cyan-400',

    aiButtonBg: 'bg-indigo-900/30',
    aiButtonBorder: 'border-indigo-700/50',
    aiButtonHoverBg: 'hover:bg-indigo-800/40',
  },
  
  
  'bright-mode': {
    name: 'Bright Mode',
    appBg: 'bg-gradient-to-br from-gray-50 via-white to-gray-50',
    navBg: 'bg-white bg-opacity-90',
    navBorder: 'border-gray-200/50',
    sectionBg: 'bg-white',
    sectionBgTranslucent: 'bg-gray-50/70',
    homeSectionBg: 'bg-gradient-to-br from-white via-gray-50 to-indigo-50',
    contactSectionBg: 'bg-gradient-to-br from-gray-50 to-indigo-50',

    textDefault: 'text-gray-900',
    textSubtle: 'text-gray-700',
    textCardDescription: 'text-gray-600',
    textSkillName: 'text-gray-700',
    primaryAccentText: 'text-gray-800',
    secondaryAccentText: 'text-indigo-600',
    primaryAccentTextSubtle: 'text-gray-700',

    headingGradientFrom: 'from-gray-700',
    headingGradientTo: 'to-indigo-600',
    headingGradientFromSecondary: 'from-indigo-600',
    headingGradientToSecondary: 'to-gray-700',

    buttonPrimaryBgFrom: 'from-gray-700',
    buttonPrimaryBgTo: 'to-indigo-600',
    buttonPrimaryHoverBgFrom: 'hover:from-gray-700',
    buttonPrimaryHoverBgTo: 'hover:to-indigo-700',
    buttonPrimaryBeforeFrom: 'from-gray-700',
    buttonPrimaryBeforeTo: 'to-indigo-500',
    buttonPrimaryText: 'text-white',

    buttonSecondaryBgFrom: 'from-indigo-500',
    buttonSecondaryBgTo: 'to-gray-700',
    buttonSecondaryHoverBgFrom: 'hover:from-indigo-600',
    buttonSecondaryHoverBgTo: 'hover:to-gray-800',
    buttonSecondaryBeforeFrom: 'from-indigo-400',
    buttonSecondaryBeforeTo: 'to-gray-500',
    buttonSecondaryText: 'text-white',

    navButtonHoverBg: 'hover:bg-gray-50/60',
    navActiveBg: 'bg-gray-100/40',
    navActiveBorder: 'border-gray-300/60',
    navActiveShadow: 'shadow-gray-300/20',

    cardBg: 'bg-white',
    cardBorder: 'border-gray-200/30',
    cardShadow: 'shadow-md shadow-gray-100/20',
    cardHoverShadow: 'hover:shadow-lg hover:shadow-gray-300/40',
    cardHoverBorder: 'hover:border-gray-300/50',

    imageBorder: 'border-gray-500',
    imageShadow: 'shadow-gray-500/30',

    footerBg: 'bg-gray-100',
    footerText: 'text-gray-700',
    footerBorder: 'border-gray-200/60',

    skillIconColor: (index) => {
      if (index % 3 === 0) return 'text-blue-600 group-hover:text-indigo-600';
      if (index % 3 === 1) return 'text-indigo-600 group-hover:text-gray-600';
      return 'text-green-600 group-hover:text-indigo-600';
    },

    cursorDefault: 'rgba(59, 130, 246, 0.5)',
    cursorNav: 'rgba(99, 102, 241, 0.5)',
    cursorSkill: 'rgba(34, 197, 94, 0.5)',
    cursorProject: 'rgba(245, 158, 11, 0.5)',
    cursorContact: 'rgba(59, 130, 246, 0.5)',
    cursorLink: 'rgba(99, 102, 241, 0.5)',
    cursorAI: 'rgba(245, 158, 11, 0.5)',

    linkTextAccent: 'text-indigo-600',
    linkHoverTextAccent: 'hover:text-indigo-700',
    socialLinkHoverPrimary: 'hover:text-blue-600',
    socialLinkHoverSecondary: 'hover:text-indigo-600',
    socialLinkHoverTertiary: 'hover:text-green-600',

    
  },
  
  'steel-streamline': {
    name: 'Steel Streamline 🤖',
    appBg: 'bg-gradient-to-br from-gray-800 via-gray-900 to-black',
    navBg: 'bg-gray-800 bg-opacity-70',
    navBorder: 'border-gray-700/50',
    sectionBg: 'bg-gray-900',
sectionBgTranslucent: 'bg-gray-900/70',
homeSectionBg: 'bg-gradient-to-tr from-gray-700 via-black to-gray-800',
contactSectionBg: 'bg-gradient-to-tr from-black to-gray-900',

textDefault: 'text-gray-200',
textSubtle: 'text-gray-300',
textCardDescription: 'text-gray-400',
textSkillName: 'text-gray-100',
primaryAccentText: 'text-white',
secondaryAccentText: 'text-gray-500',
primaryAccentTextSubtle: 'text-gray-200',

headingGradientFrom: 'from-gray-200',
headingGradientTo: 'to-gray-400',
headingGradientFromSecondary: 'from-gray-400',
headingGradientToSecondary: 'to-gray-200',

buttonPrimaryBgFrom: 'from-gray-600',
buttonPrimaryBgTo: 'to-gray-700',
buttonPrimaryHoverBgFrom: 'hover:from-gray-700',
buttonPrimaryHoverBgTo: 'hover:to-gray-800',
buttonPrimaryBeforeFrom: 'from-gray-400',
buttonPrimaryBeforeTo: 'to-gray-500',
buttonPrimaryText: 'text-white',

buttonSecondaryBgFrom: 'from-gray-500',
buttonSecondaryBgTo: 'to-gray-600',
buttonSecondaryHoverBgFrom: 'hover:from-gray-600',
buttonSecondaryHoverBgTo: 'hover:to-gray-700',
buttonSecondaryBeforeFrom: 'from-gray-300',
buttonSecondaryBeforeTo: 'to-gray-400',
buttonSecondaryText: 'text-white',

navButtonHoverBg: 'hover:bg-gray-700/60',
navActiveBg: 'bg-gray-800/40',
navActiveBorder: 'border-gray-400/60',
navActiveShadow: 'shadow-gray-500/30',

cardBg: 'bg-gray-800',
cardBorder: 'border-gray-700/30',
cardShadow: 'shadow-lg shadow-black/40',
cardHoverShadow: 'hover:shadow-2xl hover:shadow-gray-800/50',
cardHoverBorder: 'hover:border-gray-400/50',

imageBorder: 'border-gray-500',
imageShadow: 'shadow-gray-500/40',

footerBg: 'bg-black',
footerText: 'text-gray-500',
footerBorder: 'border-gray-600/60',

skillIconColor: (index) => {
if (index % 3 === 0) return 'text-gray-300 group-hover:text-white';
if (index % 3 === 1) return 'text-gray-400 group-hover:text-gray-200';
return 'text-gray-500 group-hover:text-gray-100';
},

cursorDefault: 'rgba(128, 128, 128, 0.6)',
cursorNav: 'rgba(220, 220, 220, 0.6)',
cursorSkill: 'rgba(192, 192, 192, 0.6)',
cursorProject: 'rgba(169, 169, 169, 0.6)',
cursorContact: 'rgba(105, 105, 105, 0.6)',
cursorLink: 'rgba(119, 136, 153, 0.6)',
cursorAI: 'rgba(170, 170, 170, 0.6)',

linkTextAccent: 'text-white',
linkHoverTextAccent: 'hover:text-gray-300',
socialLinkHoverPrimary: 'hover:text-gray-300',
socialLinkHoverSecondary: 'hover:text-gray-400',
socialLinkHoverTertiary: 'hover:text-gray-500',

aiButtonBg: 'bg-gray-800/30',
aiButtonBorder: 'border-gray-600/50',
aiButtonHoverBg: 'hover:bg-gray-700/40',
},


'circuit-core': {
name: 'Circuit Core ⚙️',
appBg: 'bg-gray-900',
navBg: 'bg-black bg-opacity-90',
navBorder: 'border-gray-700',
sectionBg: 'bg-gray-800',
sectionBgTranslucent: 'bg-gray-800/80',
homeSectionBg: 'bg-gradient-to-br from-black via-gray-900 to-gray-800',
contactSectionBg: 'bg-gradient-to-br from-gray-900 to-black',

textDefault: 'text-gray-300',
textSubtle: 'text-gray-400',
textCardDescription: 'text-gray-500',
textSkillName: 'text-gray-200',
primaryAccentText: 'text-white',
secondaryAccentText: 'text-gray-400',
primaryAccentTextSubtle: 'text-gray-100',

headingGradientFrom: 'from-gray-300',
headingGradientTo: 'to-gray-500',
headingGradientFromSecondary: 'from-gray-500',
headingGradientToSecondary: 'to-gray-300',

buttonPrimaryBgFrom: 'from-gray-700',
buttonPrimaryBgTo: 'to-gray-800',
buttonPrimaryHoverBgFrom: 'hover:from-gray-800',
buttonPrimaryHoverBgTo: 'hover:to-gray-900',
buttonPrimaryBeforeFrom: 'from-gray-500',
buttonPrimaryBeforeTo: 'to-gray-600',
buttonPrimaryText: 'text-white',

buttonSecondaryBgFrom: 'from-gray-500',
buttonSecondaryBgTo: 'to-gray-600',
buttonSecondaryHoverBgFrom: 'hover:from-gray-600',
buttonSecondaryHoverBgTo: 'hover:to-gray-700',
buttonSecondaryBeforeFrom: 'from-gray-300',
buttonSecondaryBeforeTo: 'to-gray-400',
buttonSecondaryText: 'text-white',

navButtonHoverBg: 'hover:bg-gray-700/80',
navActiveBg: 'bg-gray-800/60',
navActiveBorder: 'border-white/40',
navActiveShadow: 'shadow-white/20',

cardBg: 'bg-gray-850',
cardBorder: 'border-gray-700',
cardShadow: 'shadow-lg shadow-black/50',
cardHoverShadow: 'hover:shadow-2xl hover:shadow-gray-700/40',
cardHoverBorder: 'hover:border-gray-500',

imageBorder: 'border-gray-600',
imageShadow: 'shadow-gray-600/30',

footerBg: 'bg-black',
footerText: 'text-gray-600',
footerBorder: 'border-gray-700',

skillIconColor: (index) => {
if (index % 3 === 0) return 'text-gray-400 group-hover:text-white';
if (index % 3 === 1) return 'text-gray-500 group-hover:text-gray-300';
return 'text-gray-600 group-hover:text-gray-100';
},

cursorDefault: 'rgba(156, 163, 175, 0.6)',
cursorNav: 'rgba(255, 255, 255, 0.6)',
cursorSkill: 'rgba(209, 213, 219, 0.6)',
cursorProject: 'rgba(173, 181, 189, 0.6)',
cursorContact: 'rgba(142, 142, 147, 0.6)',
cursorLink: 'rgba(112, 128, 144, 0.6)',
cursorAI: 'rgba(190, 190, 190, 0.6)',

linkTextAccent: 'text-white',
linkHoverTextAccent: 'hover:text-gray-300',
socialLinkHoverPrimary: 'hover:text-gray-300',
socialLinkHoverSecondary: 'hover:text-gray-400',
socialLinkHoverTertiary: 'hover:text-gray-500',

aiButtonBg: 'bg-gray-800/30',
aiButtonBorder: 'border-gray-700/50',
aiButtonHoverBg: 'hover:bg-gray-700/40',
},
'techno-glitch': {
  name: 'Techno Glitch 👾',
  appBg: 'bg-gray-950',
  navBg: 'bg-black bg-opacity-80',
  navBorder: 'border-purple-500/50',
  sectionBg: 'bg-gray-900',
  sectionBgTranslucent: 'bg-gray-900/70',
  homeSectionBg: 'bg-black',
  contactSectionBg: 'bg-gray-950',

  textDefault: 'text-gray-300',
  textSubtle: 'text-gray-400',
  textCardDescription: 'text-gray-500',
  textSkillName: 'text-gray-200',
  primaryAccentText: 'text-cyan-400',
  secondaryAccentText: 'text-purple-400',
  primaryAccentTextSubtle: 'text-cyan-300',

  headingGradientFrom: 'from-cyan-400',
  headingGradientTo: 'to-purple-400',
  headingGradientFromSecondary: 'from-purple-400',
  headingGradientToSecondary: 'to-cyan-400',

  buttonPrimaryBgFrom: 'from-purple-600',
  buttonPrimaryBgTo: 'to-cyan-600',
  buttonPrimaryHoverBgFrom: 'hover:from-purple-700',
  buttonPrimaryHoverBgTo: 'hover:to-cyan-700',
  buttonPrimaryBeforeFrom: 'from-purple-400',
  buttonPrimaryBeforeTo: 'to-cyan-400',
  buttonPrimaryText: 'text-white',

  buttonSecondaryBgFrom: 'from-cyan-600',
  buttonSecondaryBgTo: 'to-purple-600',
  buttonSecondaryHoverBgFrom: 'hover:from-cyan-700',
  buttonSecondaryHoverBgTo: 'hover:to-purple-700',
  buttonSecondaryBeforeFrom: 'from-cyan-400',
  buttonSecondaryBeforeTo: 'to-purple-400',
  buttonSecondaryText: 'text-white',

  navButtonHoverBg: 'hover:bg-purple-800/60',
  navActiveBg: 'bg-purple-900/40',
  navActiveBorder: 'border-cyan-500/60',
  navActiveShadow: 'shadow-cyan-500/30',

  cardBg: 'bg-gray-800',
  cardBorder: 'border-cyan-700/30',
  cardShadow: 'shadow-lg shadow-cyan-900/30',
  cardHoverShadow: 'hover:shadow-2xl hover:shadow-cyan-700/50',
  cardHoverBorder: 'hover:border-cyan-500/50',

  imageBorder: 'border-cyan-500',
  imageShadow: 'shadow-cyan-500/40',

  footerBg: 'bg-black',
  footerText: 'text-gray-500',
  footerBorder: 'border-gray-800/60',

  skillIconColor: (index) => {
    if (index % 3 === 0) return 'text-cyan-400 group-hover:text-purple-400';
    if (index % 3 === 1) return 'text-purple-400 group-hover:text-cyan-400';
    return 'text-gray-400 group-hover:text-cyan-400';
  },

  cursorDefault: 'rgba(52, 211, 245, 0.6)',
  cursorNav: 'rgba(192, 132, 252, 0.6)',
  cursorSkill: 'rgba(52, 211, 245, 0.6)',
  cursorProject: 'rgba(192, 132, 252, 0.6)',
  cursorContact: 'rgba(142, 142, 147, 0.6)',
  cursorLink: 'rgba(56, 189, 248, 0.6)',
  cursorAI: 'rgba(129, 140, 248, 0.6)',

  linkTextAccent: 'text-cyan-400',
  linkHoverTextAccent: 'hover:text-purple-300',
  socialLinkHoverPrimary: 'hover:text-cyan-400',
  socialLinkHoverSecondary: 'hover:text-purple-400',
  socialLinkHoverTertiary: 'hover:text-gray-400',

  aiButtonBg: 'bg-gray-800/30',
  aiButtonBorder: 'border-cyan-700/50',
  aiButtonHoverBg: 'hover:bg-gray-700/40',
},
  
};
