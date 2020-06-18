function matchExtLinkMarkDef(sectionChild, sectionMarkDefs) {
    console.log('sectionChild: ', sectionChild)
    console.log('sectionMarkDefs: ', sectionMarkDefs)
    for (let i = 0; i < sectionMarkDefs.length; i++) {
        if (sectionMarkDefs[i]._key === sectionChild.marks[0]) {
            return {
                href: sectionMarkDefs[i].href,
                key: sectionMarkDefs[i]._key,
                text: sectionChild.text
            }
        }
        // sectionMarkDefs[i]._key === sectionChild.marks[0] && (
        //     {
        //         href: sectionMarkDefs[i].href,
        //         key: sectionMarkDefs[i]._key,
        //         text: sectionChild.text
        //     }
        // )
    }
}

export default matchExtLinkMarkDef