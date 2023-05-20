
export type LabelAndUrl={
    label:string,
    url:string
}
export const helpInformationColumn:LabelAndUrl[]=[{label:'Help',url:'/customer-care'},{label:'Track order',url:'/orders'},{label:'Delivery & returns',url:'/delivery'},{label:'Sitemap',url:'sitemap'}]

export const aboutAsosInformationColumn:LabelAndUrl[]=[{label:'About Asos',url:'/about'},{label:'Careers at ASOS',url:'/asoscareers'},
    {label:'Corporate responsibility',url:'/fashion-with-integrity'},{label:`Investors' site`,url:'/asosplc'}]

export const moreFromAsosInformationColumn:LabelAndUrl[]=[{label:'Mobile and ASOS apps',url:'/our-app'},{label:'ASOS Marketplace',url:'/marketplace'},
    {label:'Gift vouchers',url:'/gift-vouchers'},{label:'Black Friday',url:'/black-friday-cyber-monday-deals'},
    {label:'ASOS x Thrift+',url:'/get-started-asos'}];

export const shoppingFromColumn:LabelAndUrl[]=[{label:`You're in`,url:""}];

export const footer:{title:string,columns:LabelAndUrl[]}[]=[{title:'HELP & INFORMATION',columns:helpInformationColumn},{title:'ABOUT ASOS',columns: aboutAsosInformationColumn},
    {title:'MORE FROM ASOS',columns:moreFromAsosInformationColumn}
]