export const PublicRoutes = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "About",
        childrens: [
            {
                name: "Objectives",
                path: '#object'
            },
            {
                name: "Functions of LICPA",
                path: '#functions'
            },
            {
                name: "History",
                path: '#functions'
            },
            {
                name: "Govering Concil",
                path: '#govering-concil'
            },
            {
                name: "International Affiliations",
                path: '#functions'
            },
            {
                name: "Credentialing Programs",
                path: '#Credentialing'
            },
        ]
    },
    {
        name: "Member Services",
        childrens: [
            {
                name: "Firm Member",
                path: '#firmmember'
            },
            {
                name: "Licensend Member",
                path: '#Liscensend-member'
            },
            {
                name: "Individual / Chartered Members",
                path: '#functions'
            },
            {
                name: "Student Members",
                path: '#govering-concil'
            },
            {
                name: "International Affiliations",
                path: '#functions'
            },
            {
                name: "Membership Fees",
                path: '#Credentialing'
            },
        ]
    },
    {
        name: "Student Services",
        childrens: [
            {
                name: "Student Eligibility",
                path: '#student-eligibility'
            },
            {
                name: "Student Application",
                path: '#Student-application'
            },
            {
                name: "Student Fees",
                path: '#student-fees'
            },
        ],
        path: '#'
    },
    {
        name: "FAQs",
        path:'/faqs'
    },
    {
        name: "Contact",
        path:'/contact'
    },
    {
        name: "Download",
        path:'#download'
    }
]