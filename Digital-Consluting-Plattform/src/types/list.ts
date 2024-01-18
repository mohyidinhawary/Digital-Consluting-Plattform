// this list for navbar-sections component
export const links: { name: string; link: string; }[]=[
    {
name:"Home",
link:""
    },
    {
      name:"About",
      link:""
    },
    {
      name:"Services",
      link:""
    },
    {
      name:"Contact",
      link:""
    }
  ];

  // this list for sidebar component
 export const sections: { name: string; link: string; icon:string }[]=[
    {
       name:"Dasboard",
       link:"",
       icon:"fa fa-dashboard"
    },
    {
       name:"Consluting Categories",
       link:"",
       icon:"fa fa-list-alt"
    },
    {
       name:"experts",
       link:"",
       icon:"fas fa-users"
    },
    {
       name:"reservations",
       link:"",
       icon:"fa fa-ticket"
    },
    {
       name:"Favorite",
       link:"",
       icon:"fa fa-heart"
    },
    {
       name:"chats",
       link:"",
       icon:"fas fa-comments"
    },
    {
       name:"Calls",
       link:"",
       icon:"fa fa-phone"
    },
    {
       name:"Sign out",
       link:"",
       icon:"fa fa-sign-out"
    },
       ];


       export type ListItem = {
        name: string;
        link: string;
        children?: ListItem[];
      };

      export const lists=[
        {
            company: [
              {
                name: "Home",
                link: ""
              },
              {
                name: "About",
                link: ""
              },
              {
                name: "Services",
                link: ""
              }
            ]
          },
          {
            helpcenter: [
              {
                name: "Instagram",
                link: ""
              },
              {
                name: "Twitter",
                link: ""
              },
              {
                name: "Facebook",
                link: ""
              },
              {
                name: "Contact Us",
                link: ""
              }
            ]
          },
          {
            legal: [
              {
                name: "Privacy Policy",
                link: ""
              },
              {
                name: "Licensing",
                link: ""
              },
              {
                name: "Terms & Conditions",
                link: ""
              }
            ]
          },
          {
            download: [
              {
                name: "iOS",
                link: ""
              },
              {
                name: "Android",
                link: ""
              },
              {
                name: "Windows",
                link: ""
              },
              {
                name: "MacOS",
                link: ""
              }
            ]
          }

        ];
    