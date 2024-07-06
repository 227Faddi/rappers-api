const calculateAge = (dateOfBirth) => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
};
  
const rappers = {
    'notFound': {
        id: 0,
        name: 'notFound',
        dateOfBirth: 'notFound',
        get age() {
        return 'notFound';
        },
        nationality: 'notFound'
    },
    '21savage': {
        id: 1,
        name: 'Shéyaa Bin Abraham-Joseph',
        dateOfBirth: '1992-10-22',
        get age() {
        return calculateAge(this.dateOfBirth);
        },
        nationality: 'British'
    },
    'kendricklamar': {
        id: 2,
        name: 'Kendrick Lamar Duckworth',
        dateOfBirth: '1987-06-17',
        get age() {
        return calculateAge(this.dateOfBirth);
        },
        nationality: 'American'
    },
    'cardib': {
        id: 3,
        name: 'Belcalis Marlenis Almánzar',
        dateOfBirth: '1992-10-11',
        get age() {
        return calculateAge(this.dateOfBirth);
        },
        nationality: 'American'
    },
    'jcole': {
        id: 4,
        name: 'Jermaine Lamarr Cole',
        dateOfBirth: '1985-01-28',
        get age() {
        return calculateAge(this.dateOfBirth);
        },
        nationality: 'American'
    },
    'nickiminaj': {
        id: 5,
        name: 'Onika Tanya Maraj-Petty',
        dateOfBirth: '1982-12-08',
        get age() {
        return calculateAge(this.dateOfBirth);
        },
        nationality: 'Trinidadian-American'
    },
    'drake': {
        id: 6,
        name: 'Aubrey Drake Graham',
        dateOfBirth: '1986-10-24',
        get age() {
        return calculateAge(this.dateOfBirth);
        },
        nationality: 'Canadian'
    },
    'lilwayne': {
        id: 7,
        name: 'Dwayne Michael Carter Jr.',
        dateOfBirth: '1982-09-27',
        get age() {
        return calculateAge(this.dateOfBirth);
        },
        nationality: 'American'
    },
    'eminem': {
        id: 8,
        name: 'Marshall Bruce Mathers III',
        dateOfBirth: '1972-10-17',
        get age() {
        return calculateAge(this.dateOfBirth);
        },
        nationality: 'American'
    },
    'snoopdogg': {
        id: 9,
        name: 'Calvin Cordozar Broadus Jr.',
        dateOfBirth: '1971-10-20',
        get age() {
        return calculateAge(this.dateOfBirth);
        },
        nationality: 'American'
    },
    'jayz': {
        id: 10,
        name: 'Shawn Corey Carter',
        dateOfBirth: '1969-12-04',
        get age() {
        return calculateAge(this.dateOfBirth);
        },
        nationality: 'American'
    },
    'future': {
        id: 11,
        name: 'Nayvadius DeMun Wilburn',
        dateOfBirth: '1983-11-20',
        get age() {
        return calculateAge(this.dateOfBirth);
        },
        nationality: 'American'
    },
    'travisscott': {
        id: 12,
        name: 'Jacques Berman Webster II',
        dateOfBirth: '1992-04-30',
        get age() {
        return calculateAge(this.dateOfBirth);
        },
        nationality: 'American'
    },
    'postmalone': {
        id: 13,
        name: 'Austin Richard Post',
        dateOfBirth: '1995-07-04',
        get age() {
        return calculateAge(this.dateOfBirth);
        },
        nationality: 'American'
    },
    'liluzivert': {
        id: 14,
        name: 'Symere Bysil Woods',
        dateOfBirth: '1994-07-31',
        get age() {
        return calculateAge(this.dateOfBirth);
        },
        nationality: 'American'
    },
    'megantheestallion': {
        id: 15,
        name: 'Megan Jovon Ruth Pete',
        dateOfBirth: '1995-02-15',
        get age() {
        return calculateAge(this.dateOfBirth);
        },
        nationality: 'American'
    },
    'lilbaby': {
        id: 16,
        name: 'Dominique Armani Jones',
        dateOfBirth: '1994-12-03',
        get age() {
        return calculateAge(this.dateOfBirth);
        },
        nationality: 'American'
    },
    'dababy': {
        id: 17,
        name: 'Jonathan Lyndale Kirk',
        dateOfBirth: '1991-12-22',
        get age() {
        return calculateAge(this.dateOfBirth);
        },
        nationality: 'American'
    },
    'asaprocky': {
        id: 18,
        name: 'Rakim Athelaston Mayers',
        dateOfBirth: '1988-10-03',
        get age() {
        return calculateAge(this.dateOfBirth);
        },
        nationality: 'American'
    },
    'tylerthecreator': {
        id: 19,
        name: 'Tyler Gregory Okonma',
        dateOfBirth: '1991-03-06',
        get age() {
        return calculateAge(this.dateOfBirth);
        },
        nationality: 'American'
    },
    'juicewrld': {
        id: 20,
        name: 'Jarad Anthony Higgins',
        dateOfBirth: '1998-12-02',
        get age() {
        return calculateAge(this.dateOfBirth);
        },
        nationality: 'American'
    },
    'lildurk': {
        id: 21,
        name: 'Durk Derrick Banks',
        dateOfBirth: '1992-10-19',
        get age() {
        return calculateAge(this.dateOfBirth);
        },
        nationality: 'American'
    },
    'popsmoke': {
        id: 22,
        name: 'Bashar Barakah Jackson',
        dateOfBirth: '1999-07-20',
        get age() {
        return calculateAge(this.dateOfBirth);
        },
        nationality: 'American'
    },
    'lilnasx': {
        id: 23,
        name: 'Montero Lamar Hill',
        dateOfBirth: '1999-04-09',
        get age() {
        return calculateAge(this.dateOfBirth);
        },
        nationality: 'American'
    },
    'roddyricch': {
        id: 24,
        name: 'Rodrick Wayne Moore Jr.',
        dateOfBirth: '1998-10-22',
        get age() {
        return calculateAge(this.dateOfBirth);
        },
        nationality: 'American'
    },
    'gunna': {
        id: 25,
        name: 'Sergio Giavanni Kitchens',
        dateOfBirth: '1993-06-14',
        get age() {
        return calculateAge(this.dateOfBirth);
        },
        nationality: 'American'
    },
    'youngthug': {
        id: 26,
        name: 'Jeffery Lamar Williams',
        dateOfBirth: '1991-08-16',
        get age() {
        return calculateAge(this.dateOfBirth);
        },
        nationality: 'American'
    },
    'chancetherapper': {
        id: 27,
        name: 'Chancelor Jonathan Bennett',
        dateOfBirth: '1993-04-16',
        get age() {
        return calculateAge(this.dateOfBirth);
        },
        nationality: 'American'
    },
    'playboicarti': {
        id: 28,
        name: 'Jordan Terrell Carter',
        dateOfBirth: '1996-09-13',
        get age() {
        return calculateAge(this.dateOfBirth);
        },
        nationality: 'American'
    },
    'bigsean': {
        id: 29,
        name: 'Sean Michael Leonard Anderson',
        dateOfBirth: '1988-03-25',
        get age() {
        return calculateAge(this.dateOfBirth);
        },
        nationality: 'American'
    },
    'wale': {
        id: 30,
        name: 'Olubowale Victor Akintimehin',
        dateOfBirth: '1984-09-21',
        get age() {
        return calculateAge(this.dateOfBirth);
        },
        nationality: 'American'
    },
};
  
module.exports = { rappers };

