function matchExtLinkMarkDef(sectionChild, sectionMarkDefs) {
    for (let i = 0; i < sectionMarkDefs.length; i++) {
        if (sectionMarkDefs[i]._key === sectionChild.marks[0]) {
            return {
                href: sectionMarkDefs[i].href,
                _key: sectionMarkDefs[i]._key,
                text: sectionChild.text
            }
        }
    }
}

export default matchExtLinkMarkDef