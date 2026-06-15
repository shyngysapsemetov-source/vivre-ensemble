const studyContent = {
    module1: {
        title: "Module 1: Fundamental Rights (6 hours)",
        badge: "module-1",
        sections: [
            {
                title: "Key Sources of Fundamental Rights",
                content: `<ul>
<li><strong>Declaration of the Rights of Man and of the Citizen</strong> - France, 1789</li>
<li><strong>Universal Declaration of Human Rights</strong> - United Nations, Paris, 1948</li>
<li><strong>European Convention for the Protection of Human Rights</strong> - Council of Europe, Strasbourg, 1951 (entered into force 1953)</li>
<li><strong>Charter of Fundamental Rights of the European Union</strong> - 2000</li>
<li><strong>Luxembourg's first Constitution</strong> - 1848 (current one from 1868, heavily amended)</li>
</ul>`
            },
            {
                title: "Categories of Rights in Luxembourg's Constitution",
                content: `<h4>First Generation: Civil & Political Rights</h4>
<ul>
<li>Protection from arbitrary state action (personal liberty, privacy, property)</li>
<li>Participation in public affairs (right to vote, freedom of expression, assembly, association)</li>
<li>Defendant's/litigant's rights (fair trial, no punishment without law)</li>
</ul>
<h4>Second Generation: Social & Economic Rights</h4>
<ul>
<li>Right to work, social security, health protection</li>
<li>Services provided by the community (education, housing)</li>
</ul>
<h4>Constitutional Objectives (Third Generation)</h4>
<ul>
<li>Environmental protection, sustainable development</li>
<li>Natural resource preservation</li>
</ul>`
            },
            {
                title: "Limitations to Fundamental Rights",
                content: `<ul>
<li><strong>Age</strong> - Minors have restricted rights (e.g., voting at 18)</li>
<li><strong>Incapacity</strong> - Judicial declaration can restrict rights</li>
<li><strong>Criminal conviction</strong> - Can lose civic/political rights</li>
<li><strong>Nationality</strong> - Right to vote (national elections), access to certain professions</li>
<li><strong>European citizenship</strong> - EU nationals have some rights non-EU nationals don't</li>
</ul>`
            },
            {
                title: "Protection of Fundamental Rights - Courts",
                content: `<h4>National Level</h4>
<ul>
<li><strong>Ordinary judges</strong> - Can set aside laws conflicting with international treaties</li>
<li><strong>Constitutional Court</strong> - 9 members; rules on constitutionality of laws (but NOT treaties); no direct public recourse (only referral by courts)</li>
</ul>
<h4>Supranational Level</h4>
<ul>
<li><strong>European Court of Human Rights (ECHR)</strong> - Strasbourg; enforces the European Convention; individuals can apply after exhausting domestic remedies</li>
<li><strong>Court of Justice of the European Union (CJEU)</strong> - Luxembourg City; ensures uniform interpretation of EU law; enforces Charter of Fundamental Rights</li>
</ul>`
            }
        ]
    },
    module2: {
        title: "Module 2: State and Municipal Institutions (12 hours)",
        badge: "module-2",
        sections: [
            {
                title: "The State - Basic Facts",
                content: `<ul>
<li><strong>Official name:</strong> Grand Duchy of Luxembourg</li>
<li><strong>Area:</strong> 2,586 km&sup2;</li>
<li><strong>Form of government:</strong> Parliamentary democracy, constitutional monarchy</li>
<li><strong>Head of state:</strong> Grand Duke Henri (since 7 October 2000)</li>
<li><strong>Independence:</strong> Treaty of London, 19 April 1839</li>
<li><strong>Constitution:</strong> 1868 (fourth, still in force, heavily amended)</li>
<li><strong>Languages:</strong> Luxembourgish (national), French (legislation), German (administrative)</li>
<li><strong>National Day:</strong> 23 June</li>
<li><strong>Anthem:</strong> "Ons Heemecht" (1859, by Michel Lentz / Jean-Antoine Zinnen)</li>
<li><strong>Flag:</strong> Red, white, sky blue (horizontal bands)</li>
</ul>`
            },
            {
                title: "Three Branches of Power",
                content: `<ul>
<li><strong>Legislative:</strong> Joint action of Parliament + Government + Council of State</li>
<li><strong>Executive:</strong> Grand Duke + Government (ministers)</li>
<li><strong>Judicial:</strong> Independent courts and tribunals</li>
</ul>
<p>Note: Separation is flexible between legislative and executive (linked). Only the judiciary is completely independent.</p>`
            },
            {
                title: "The Grand Duke",
                content: `<ul>
<li>Head of State; crown passed through House of Nassau</li>
<li><strong>Inviolable</strong> - cannot be charged or prosecuted</li>
<li>Every measure must be countersigned by a government member</li>
<li>Formally appoints/dismisses government, dissolves parliament</li>
<li>In practice: appoints formateur based on election results; formateur becomes PM</li>
<li>Sanctions and promulgates laws</li>
</ul>`
            },
            {
                title: "The Parliament (Chamber of Deputies)",
                content: `<ul>
<li><strong>60 MPs</strong> elected for <strong>5-year</strong> terms</li>
<li>Voting is <strong>COMPULSORY</strong> for registered voters</li>
<li>4 constituencies: South (23 seats), Centre (21), North (9), East (7)</li>
<li>Voters have as many votes as seats in their constituency</li>
<li>Can distribute votes across multiple party lists</li>
<li>Parliament votes laws, controls government, approves budget</li>
<li>Second constitutional vote required (3-month gap) unless Council of State grants waiver</li>
</ul>`
            },
            {
                title: "The Council of State",
                content: `<ul>
<li><strong>21 members</strong> formally appointed by the Grand Duke</li>
<li>Functions as moderating second chamber (Luxembourg is unicameral)</li>
<li>Must give opinion on ALL legislation before parliamentary vote</li>
<li>Can refuse waiver of second vote (suspensive veto only)</li>
<li>Checks compliance with Constitution, treaties, rule of law</li>
<li>Advisory role (persuasion, not enforcement)</li>
</ul>`
            },
            {
                title: "The Government",
                content: `<ul>
<li>Prime Minister leads; ministers hold multiple portfolios</li>
<li>Government presents programme to Parliament; votes confidence</li>
<li>Ministers are politically answerable to Parliament</li>
<li>Must resign after negative vote (motion of censure)</li>
<li>Government proposes <strong>projets de loi</strong> (draft laws)</li>
<li>MPs can propose <strong>propositions de loi</strong> (bills)</li>
</ul>`
            },
            {
                title: "Electoral System",
                content: `<ul>
<li><strong>To vote:</strong> Luxembourg national, at least 18, enjoy civic rights</li>
<li><strong>To stand for election:</strong> at least 18, domiciled in Luxembourg</li>
<li><strong>Incompatibilities:</strong> Cannot be MP and government member/judge/Council of State member simultaneously</li>
<li><strong>Constituencies:</strong> South (23), Centre (21), North (9), East (7) = 60 total</li>
<li><strong>System:</strong> Proportional representation; smallest electoral quotient method</li>
<li><strong>EU elections:</strong> 6 MEPs; EU nationals vote if domiciled 5+ years</li>
<li><strong>Municipal elections:</strong> Foreign nationals vote if domiciled 5+ years</li>
</ul>`
            },
            {
                title: "Judicial System",
                content: `<h4>Constitutional Court</h4>
<ul><li>9 members; rules on constitutionality of laws; no direct public recourse</li></ul>
<h4>Ordinary Courts (Judicial Order)</h4>
<ul>
<li><strong>Magistrates' courts (Justices de paix):</strong> 3 seats (Luxembourg, Esch-sur-Alzette, Diekirch) - minor civil cases up to 10,000 euros</li>
<li><strong>District courts:</strong> 2 (Luxembourg and Diekirch) - civil, commercial, criminal</li>
<li><strong>Supreme Court of Justice:</strong> Court of Cassation (5 judges) + Court of Appeal (9 chambers, 35 judges)</li>
</ul>
<h4>Administrative Order</h4>
<ul>
<li><strong>Administrative Tribunal</strong> (first instance)</li>
<li><strong>Administrative Court</strong> (appeal/supreme administrative)</li>
</ul>
<h4>Specialized</h4>
<ul><li>Labour Court, Social Court</li></ul>`
            },
            {
                title: "Municipalities",
                content: `<ul>
<li>Only political subdivision (no provinces or departments)</li>
<li>~100 municipalities (formerly 116, consolidated over time)</li>
<li>Elected municipal council (6-year term)</li>
<li>Day-to-day management by mayor + municipal executives (college echevinal)</li>
<li>Proportional representation if population > 3,000; otherwise relative majority</li>
<li>Foreign nationals vote in municipal elections if domiciled 5+ years</li>
</ul>`
            },
            {
                title: "Legislative Procedure",
                content: `<ul>
<li><strong>Projet de loi:</strong> Government-initiated bill</li>
<li><strong>Proposition de loi:</strong> MP-initiated bill</li>
<li>Council of State gives mandatory opinion (avis)</li>
<li>Parliamentary committee examines the bill</li>
<li>First vote in Parliament</li>
<li>Second vote required after 3+ months, UNLESS Council of State grants dispensation</li>
<li>Grand Duke sanctions and promulgates the law</li>
<li>Published in the <strong>Memorial</strong> (official gazette) to take effect</li>
</ul>`
            },
            {
                title: "Advisory Bodies",
                content: `<h4>6 Professional Chambers</h4>
<ul>
<li>Employers: Chamber of Commerce, Chamber of Trades, Chamber of Agriculture</li>
<li>Workers: Chamber of Private Employees, Chamber of Civil Servants, Chamber of Labour</li>
<li>Must be consulted on relevant legislation</li>
</ul>
<h4>Economic and Social Council (CES)</h4>
<ul>
<li>Advisory body on economic, financial, social issues</li>
<li>Delivers annual report on country's economic/social situation</li>
</ul>`
            },
            {
                title: "Political Parties",
                content: `<ul>
<li><strong>CSV</strong> - Christian Social Party (centre-right, historically dominant)</li>
<li><strong>LSAP</strong> - Luxembourg Socialist Workers' Party (founded 1902)</li>
<li><strong>DP</strong> - Democratic Party (liberal)</li>
<li><strong>Dei Greng</strong> - The Greens</li>
<li><strong>ADR</strong> - Alternative and Democratic Reform Party</li>
<li><strong>Communist Party</strong> (founded 1921)</li>
</ul>`
            }
        ]
    },
    module3: {
        title: "Module 3: History & European Integration (6 hours)",
        badge: "module-3",
        sections: [
            {
                title: "Origins (963-1443)",
                content: `<ul>
<li><strong>963:</strong> Count Siegfried acquires Lucilinburhuc ("small castle") from Abbey of St Maximin of Trier</li>
<li>Built on the Bock promontory above the Alzette valley</li>
<li><strong>1308:</strong> Count Henry VII elected King of the Holy Roman Empire (Emperor 1312)</li>
<li><strong>John the Blind</strong> (Henry VII's son) - became King of Bohemia</li>
<li><strong>1354:</strong> Emperor Charles IV elevated County to a <strong>Duchy</strong></li>
<li><strong>1443:</strong> Philip the Good (Duke of Burgundy) conquered Luxembourg</li>
</ul>`
            },
            {
                title: "Foreign Rule (1443-1815)",
                content: `<ul>
<li>1443-1477: Burgundian rule</li>
<li>1477 onwards: Habsburg rule (marriage inheritance)</li>
<li>1556: Charles V splits empire; Luxembourg goes to Spanish Habsburgs</li>
<li>1659: Treaty of the Pyrenees - southern part (incl. Thionville) ceded to France</li>
<li>1684: Entirely conquered by Louis XIV</li>
<li>1697: Returned to Spain</li>
<li>1714: Passes to Austrian Habsburgs</li>
<li>1795: Conquered by French Republic; abolished as a duchy; becomes "Departement des Forets"</li>
</ul>`
            },
            {
                title: "Birth of the Grand Duchy (1815-1867)",
                content: `<ul>
<li><strong>1815:</strong> Congress of Vienna creates the Grand Duchy; personal union with Netherlands (William I of Orange-Nassau); joins German Confederation; Prussian garrison</li>
<li><strong>1830:</strong> Belgian Revolution - Luxembourg joins but fortress stays Dutch</li>
<li><strong>1839 (19 April):</strong> Treaty of London - western 2/3 becomes Belgian province; remainder = independent Grand Duchy. <em>Official birthday of Luxembourg.</em></li>
<li><strong>1841:</strong> First constitutional charter granted</li>
<li><strong>1842:</strong> Joins German Customs Union (Zollverein)</li>
<li><strong>1848:</strong> New liberal constitution (modeled on Belgian)</li>
<li><strong>1867:</strong> Luxembourg Crisis resolved: Treaty of London declares perpetual neutrality, fortress dismantled, Prussian garrison withdraws, leaves German Confederation</li>
<li><strong>1868:</strong> Fourth constitution adopted (still in force today)</li>
</ul>`
            },
            {
                title: "Industrialisation & Own Dynasty (1867-1914)",
                content: `<ul>
<li><strong>1859:</strong> First railway line opened</li>
<li><strong>1879:</strong> Emile Metz buys Thomas process licence (allows dephosphorisation of Luxembourg iron ore)</li>
<li><strong>1886:</strong> First integrated steelworks (Dudelange)</li>
<li><strong>1890:</strong> King-Grand Duke William III dies without male heir; personal union with Netherlands ends; <strong>Adolphe of Nassau</strong> becomes first Grand Duke of own dynasty</li>
<li><strong>1876-1900:</strong> 10,126 Luxembourgers emigrate to America</li>
</ul>`
            },
            {
                title: "World War I & Political Crisis",
                content: `<ul>
<li><strong>1914:</strong> Germany invades Luxembourg, violating neutrality</li>
<li>Grand Duchess Marie-Adelaide met with Emperor William II (later accused of collaboration)</li>
<li>136 Allied bombing raids (53 civilian deaths)</li>
<li>1,000+ Luxembourgers served in French Foreign Legion</li>
<li><strong>January 1919:</strong> Attempt to proclaim republic; prevented by French troops</li>
<li>Marie-Adelaide abdicates; sister <strong>Charlotte</strong> becomes Grand Duchess</li>
<li><strong>September 1919:</strong> Referendum - 78% voted for constitutional monarchy</li>
<li><strong>1919:</strong> Universal suffrage introduced</li>
</ul>`
            },
            {
                title: "Interwar Period (1919-1940)",
                content: `<ul>
<li><strong>1918:</strong> Collapse of the Zollverein</li>
<li><strong>1921:</strong> Belgium-Luxembourg Economic Union (UEBL/BLEU)</li>
<li><strong>1929:</strong> Law on holding companies (seeds of financial sector)</li>
<li><strong>1937:</strong> Referendum - 50.7% voted AGAINST prohibition of Communist Party ("Muzzle Law" rejected)</li>
<li>Social legislation development; economic crisis impact</li>
</ul>`
            },
            {
                title: "World War II (1940-1945)",
                content: `<ul>
<li><strong>10 May 1940:</strong> Nazi Germany invades</li>
<li>Grand Duchess Charlotte + government go into exile</li>
<li>August 1940: German civil administration replaces Luxembourg authorities</li>
<li>Germanisation policy; ~11,000 young men forcibly conscripted</li>
<li>~4,000 Luxembourgers joined Nazi party; some volunteered for SS</li>
<li>~4,000 Jews in Luxembourg; half fled day of invasion; 800+ deported and murdered</li>
<li><strong>9 September 1944:</strong> First American divisions liberate Luxembourg</li>
<li><strong>16 December 1944:</strong> Battle of the Bulge (German counter-offensive)</li>
<li><strong>22 February 1945:</strong> Luxembourg completely liberated</li>
<li>2% of total population lost their lives</li>
<li>Post-war: 5,006 people sentenced for collaboration; 12 death sentences, 8 executed</li>
</ul>`
            },
            {
                title: "Post-War & International Integration",
                content: `<ul>
<li><strong>1945:</strong> United Nations - founding member</li>
<li><strong>1948:</strong> Neutrality officially renounced; OEEC membership; Marshall Plan</li>
<li><strong>1949:</strong> NATO founding member; Council of Europe founding member</li>
<li><strong>1951:</strong> ECSC (European Coal and Steel Community) - founding member</li>
<li><strong>1952:</strong> Luxembourg City chosen as ECSC seat</li>
<li><strong>1957:</strong> Treaties of Rome - founding member of EEC</li>
<li><strong>1974:</strong> Steel crisis begins (peak: 25,000 jobs, 17% workforce, ~30% GDP)</li>
<li><strong>1981:</strong> Last mine closed</li>
<li><strong>1985:</strong> Schengen Agreement signed (Luxembourg village; force 1995)</li>
<li><strong>1992:</strong> Maastricht Treaty</li>
<li><strong>1997:</strong> Last blast furnace closed</li>
<li><strong>1999-2002:</strong> Euro introduction</li>
<li><strong>2003:</strong> University of Luxembourg founded</li>
<li><strong>2008:</strong> Dual citizenship permitted</li>
</ul>`
            },
            {
                title: "European Integration",
                content: `<ul>
<li><strong>ECSC (1951):</strong> Coal and Steel Community - Luxembourg founding member + HQ</li>
<li><strong>EEC/Euratom (1957):</strong> Treaty of Rome</li>
<li><strong>Maastricht (1992):</strong> European Union created; common currency decided</li>
<li><strong>Amsterdam (1997):</strong> Reforms to institutions</li>
<li><strong>Lisbon (2007/2009):</strong> Current treaty framework</li>
<li><strong>Schengen (1985/1995):</strong> Free movement without border controls</li>
<li><strong>Euro:</strong> Introduced 1999 (electronically), 2002 (banknotes/coins)</li>
</ul>
<h4>EU Institutions in Luxembourg (Kirchberg)</h4>
<ul>
<li>Court of Justice of the EU (CJEU)</li>
<li>General Secretariat of the European Parliament</li>
<li>European Court of Auditors</li>
<li>European Investment Bank</li>
<li>Eurostat</li>
<li>Publications Office of the EU</li>
<li>European Public Prosecutor's Office</li>
</ul>
<h4>Luxembourg Presidents of European Commission</h4>
<ul>
<li>Gaston Thorn (1981-1985)</li>
<li>Jacques Santer (1995-1999)</li>
<li>Jean-Claude Juncker (2014-2019)</li>
</ul>`
            },
            {
                title: "Economy - Key Transitions",
                content: `<ul>
<li><strong>Steel era:</strong> 1842 Zollverein &rarr; 1879 Thomas process &rarr; peak 1970s &rarr; crisis 1974 &rarr; last furnace 1997</li>
<li><strong>Financial era:</strong> 1929 holding law &rarr; 1960s Eurodollar/Eurobond &rarr; today: 2nd largest fund centre globally</li>
<li><strong>Satellite/Media:</strong> RTL (radio 1929, TV 1955); SES (50+ satellites)</li>
<li><strong>Digital:</strong> Amazon, eBay, PayPal, iTunes established European HQ</li>
<li><strong>ARBED &rarr; Arcelor (2002) &rarr; ArcelorMittal (2006)</strong></li>
</ul>`
            }
        ]
    }
};

// ===== QUIZ QUESTIONS =====
const questions = [
    // ===== MODULE 1 - Fundamental Rights (40 questions) =====
    {module: 1, q: "In what year was the Universal Declaration of Human Rights adopted?", options: ["1789", "1948", "1951", "2000"], correct: 1, explanation: "The Universal Declaration of Human Rights was adopted by the United Nations in Paris in 1948."},
    {module: 1, q: "Which court in Luxembourg rules on the constitutionality of laws?", options: ["Supreme Court of Justice", "Constitutional Court", "Administrative Court", "European Court of Human Rights"], correct: 1, explanation: "The Constitutional Court (9 members) rules on constitutionality of laws. It cannot rule on treaties and has no direct public recourse."},
    {module: 1, q: "How many members does Luxembourg's Constitutional Court have?", options: ["5", "7", "9", "21"], correct: 2, explanation: "The Constitutional Court has 9 members."},
    {module: 1, q: "Which document from 1789 is a key source of fundamental rights?", options: ["Universal Declaration of Human Rights", "European Convention on Human Rights", "Declaration of the Rights of Man and of the Citizen", "Charter of Fundamental Rights of the EU"], correct: 2, explanation: "The Declaration of the Rights of Man and of the Citizen was adopted in France in 1789."},
    {module: 1, q: "Where is the European Court of Human Rights located?", options: ["Luxembourg City", "Brussels", "Strasbourg", "The Hague"], correct: 2, explanation: "The European Court of Human Rights (ECHR) is located in Strasbourg and enforces the European Convention on Human Rights."},
    {module: 1, q: "The European Convention for the Protection of Human Rights was adopted by which organization?", options: ["United Nations", "European Union", "Council of Europe", "NATO"], correct: 2, explanation: "The European Convention was adopted by the Council of Europe in Strasbourg in 1951."},
    {module: 1, q: "What year was Luxembourg's first Constitution?", options: ["1839", "1848", "1867", "1868"], correct: 1, explanation: "Luxembourg's first Constitution was drafted in 1848. The current one dates from 1868 (heavily amended)."},
    {module: 1, q: "Which is NOT a limitation on fundamental rights in Luxembourg?", options: ["Age", "Gender", "Criminal conviction", "Nationality"], correct: 1, explanation: "Gender is not listed as a limitation. The recognized limitations are: age, incapacity, criminal conviction, and nationality."},
    {module: 1, q: "What are 'second generation' rights in Luxembourg's Constitution?", options: ["Civil and political rights", "Social and economic rights", "Environmental rights", "Digital rights"], correct: 1, explanation: "Second-generation rights are social and economic rights: right to work, social security, health protection, education."},
    {module: 1, q: "The Charter of Fundamental Rights of the European Union was adopted in what year?", options: ["1948", "1951", "1992", "2000"], correct: 3, explanation: "The EU Charter of Fundamental Rights was adopted in 2000."},
    {module: 1, q: "Can individuals directly petition Luxembourg's Constitutional Court?", options: ["Yes, any citizen can", "No, only courts can refer cases to it", "Yes, but only after exhausting other remedies", "Only the Grand Duke can refer cases"], correct: 1, explanation: "There is no direct public recourse to the Constitutional Court. Only courts hearing a case can refer constitutional questions to it."},
    {module: 1, q: "The Court of Justice of the European Union is located in:", options: ["Brussels", "Strasbourg", "Luxembourg City", "The Hague"], correct: 2, explanation: "The CJEU is located in Luxembourg City (Kirchberg quarter) and ensures uniform interpretation of EU law."},
    {module: 1, q: "What are 'first generation' fundamental rights?", options: ["Social and economic rights", "Civil and political rights", "Environmental rights", "Cultural rights"], correct: 1, explanation: "First-generation rights are civil and political rights: protection from arbitrary state action, participation in public affairs, and defendant's rights."},
    {module: 1, q: "Which right is guaranteed by 'first generation' rights?", options: ["Right to social security", "Right to housing", "Freedom of expression", "Right to education"], correct: 2, explanation: "Freedom of expression is a first-generation civil/political right that guarantees the individual's participation in public affairs."},
    {module: 1, q: "What do constitutional objectives in Luxembourg concern?", options: ["Military defense", "Environment and sustainable development", "Foreign trade", "Banking regulation"], correct: 1, explanation: "Constitutional objectives (sometimes called third-generation rights) concern the environment, natural resources, and sustainable development."},
    {module: 1, q: "Who can set aside laws conflicting with international treaties?", options: ["Only the Constitutional Court", "The ordinary judge", "Only the Grand Duke", "Only the European Court"], correct: 1, explanation: "Ordinary judges can set aside laws that conflict with international treaties in Luxembourg's legal system."},
    {module: 1, q: "What must an individual do before applying to the European Court of Human Rights?", options: ["Get permission from Parliament", "Exhaust all domestic remedies", "Pay a fee of 10,000 euros", "Get approval from the Grand Duke"], correct: 1, explanation: "Individuals must exhaust all domestic remedies before applying to the European Court of Human Rights in Strasbourg."},
    {module: 1, q: "The ECHR enforces which document?", options: ["EU Charter of Fundamental Rights", "Universal Declaration of Human Rights", "European Convention on Human Rights", "Luxembourg Constitution"], correct: 2, explanation: "The European Court of Human Rights (ECHR) in Strasbourg enforces the European Convention for the Protection of Human Rights and Fundamental Freedoms."},
    {module: 1, q: "The CJEU enforces which document regarding rights?", options: ["European Convention on Human Rights", "Charter of Fundamental Rights of the EU", "Universal Declaration of Human Rights", "Declaration of Rights of Man"], correct: 1, explanation: "The Court of Justice of the EU enforces the Charter of Fundamental Rights of the European Union and ensures uniform interpretation of EU law."},
    {module: 1, q: "Where was the Universal Declaration of Human Rights adopted?", options: ["Geneva", "New York", "Paris", "London"], correct: 2, explanation: "The Universal Declaration of Human Rights was adopted in Paris in 1948 by the United Nations General Assembly."},
    {module: 1, q: "A criminal conviction can result in the loss of:", options: ["Property rights only", "Civic and political rights", "The right to own a home", "Religious freedom"], correct: 1, explanation: "A criminal conviction can lead to the loss of civic and political rights, including the right to vote and stand for election."},
    {module: 1, q: "Which right is restricted based on nationality?", options: ["Freedom of religion", "Right to vote in national elections", "Freedom of movement within the country", "Right to a fair trial"], correct: 1, explanation: "The right to vote in national elections is restricted to Luxembourg nationals. Nationality also affects access to certain professions."},
    {module: 1, q: "The right to vote is limited by which factor?", options: ["Income level", "Education level", "Age (minimum 18)", "Property ownership"], correct: 2, explanation: "The right to vote requires being at least 18 years old, being a Luxembourg national, and enjoying civic/political rights."},
    {module: 1, q: "Second-generation rights include the right to:", options: ["Vote", "Free speech", "Work and social security", "Bear arms"], correct: 2, explanation: "Second-generation social and economic rights include the right to work, social security, health protection, and education."},
    {module: 1, q: "The European Convention on Human Rights entered into force in:", options: ["1948", "1951", "1953", "1957"], correct: 1, explanation: "The European Convention was adopted in 1951 by the Council of Europe in Strasbourg."},
    {module: 1, q: "What is the hierarchy of Luxembourg's legal system regarding rights?", options: ["Constitution above all", "International treaties can override national laws", "EU law has no effect", "Only national law matters"], correct: 1, explanation: "In Luxembourg, ordinary judges can set aside national laws that conflict with international treaties, placing treaty obligations above ordinary legislation."},
    {module: 1, q: "Which is a second-generation social right?", options: ["Freedom of assembly", "Right to education", "Right to a fair trial", "Freedom of the press"], correct: 1, explanation: "The right to education is a second-generation social right, guaranteeing services provided by the community."},
    {module: 1, q: "The Constitutional Court can rule on:", options: ["International treaties", "Constitutionality of laws only", "Criminal cases", "Municipal regulations only"], correct: 1, explanation: "The Constitutional Court rules only on the constitutionality of laws. It cannot rule on treaties."},
    {module: 1, q: "Luxembourg's national reference for fundamental rights is:", options: ["The Napoleonic Code", "The Constitution (first adopted 1848)", "The Treaty of London", "The Schengen Agreement"], correct: 1, explanation: "Luxembourg's Constitution, first adopted in 1848 and currently in its 1868 version (heavily amended), is the national reference for fundamental rights."},
    {module: 1, q: "What does 'incapacity' mean as a limitation on rights?", options: ["Being too poor", "A judicial declaration restricting legal capacity", "Not speaking Luxembourgish", "Being unemployed"], correct: 1, explanation: "Incapacity refers to a judicial declaration that restricts a person's legal capacity, which can limit the exercise of certain rights."},
    {module: 1, q: "Which court ensures uniform interpretation of EU law?", options: ["European Court of Human Rights", "Court of Justice of the European Union", "Luxembourg Constitutional Court", "International Court of Justice"], correct: 1, explanation: "The CJEU (Court of Justice of the European Union) in Luxembourg City ensures uniform interpretation and application of EU law across all member states."},
    {module: 1, q: "First-generation rights protect individuals from:", options: ["Economic hardship", "Arbitrary action of state authorities", "Natural disasters", "Foreign invasion"], correct: 1, explanation: "First-generation civil and political rights protect individuals from the arbitrary action of state authorities."},
    {module: 1, q: "EU citizens in Luxembourg have rights that non-EU nationals don't regarding:", options: ["Property ownership", "Freedom of religion", "Right to vote in European elections", "Right to a lawyer"], correct: 2, explanation: "European citizenship grants additional rights to EU nationals, such as voting in European and municipal elections, that non-EU nationals don't automatically have."},
    {module: 1, q: "The right to a fair trial is classified as a:", options: ["Second-generation right", "Constitutional objective", "First-generation right (defendant's rights)", "Third-generation right"], correct: 2, explanation: "The right to a fair trial (litigant's/defendant's rights) is a first-generation civil right."},
    {module: 1, q: "Which institution is NOT involved in protecting fundamental rights in Luxembourg?", options: ["Constitutional Court", "Ordinary judges", "The army", "European Court of Human Rights"], correct: 2, explanation: "The protection of fundamental rights involves the Constitutional Court, ordinary judges, the ECHR, and the CJEU - not the military."},
    {module: 1, q: "Freedom of assembly is a:", options: ["Social right", "Economic right", "Civil and political right", "Environmental right"], correct: 2, explanation: "Freedom of assembly is a first-generation civil and political right guaranteeing participation in public affairs."},
    {module: 1, q: "The right to property is protected under which generation of rights?", options: ["First generation (civil rights)", "Second generation (social rights)", "Third generation (environmental)", "Not protected at all"], correct: 0, explanation: "The right to property is a first-generation right that protects individuals from arbitrary state action."},
    {module: 1, q: "What year was the European Convention on Human Rights signed?", options: ["1948", "1950", "1951", "1953"], correct: 2, explanation: "The European Convention for the Protection of Human Rights and Fundamental Freedoms was signed in 1951 by the Council of Europe."},
    {module: 1, q: "How does a case reach the Constitutional Court?", options: ["Direct petition by citizens", "Referral by a court hearing a case", "Request by the Grand Duke", "Vote by Parliament"], correct: 1, explanation: "Cases reach the Constitutional Court only through referral by a court that is already hearing a case and encounters a constitutional question."},
    {module: 1, q: "The right to health protection is classified as:", options: ["First-generation right", "Second-generation social right", "Constitutional objective", "Not in Luxembourg's Constitution"], correct: 1, explanation: "The right to health protection is a second-generation social and economic right in Luxembourg's Constitution."},

    // ===== MODULE 2 - Institutions (60 questions) =====
    {module: 2, q: "How many MPs sit in Luxembourg's Parliament (Chamber of Deputies)?", options: ["50", "55", "60", "65"], correct: 2, explanation: "The Chamber of Deputies has 60 MPs elected for 5-year terms."},
    {module: 2, q: "How many members does the Council of State have?", options: ["9", "15", "21", "60"], correct: 2, explanation: "The Council of State has 21 members, formally appointed by the Grand Duke."},
    {module: 2, q: "Is voting compulsory in Luxembourg?", options: ["Yes, for all elections", "Yes, for national elections only", "No, it is voluntary", "Only for citizens over 25"], correct: 0, explanation: "Voting is compulsory for all registered voters in Luxembourg."},
    {module: 2, q: "How many electoral constituencies does Luxembourg have?", options: ["3", "4", "5", "12"], correct: 1, explanation: "Luxembourg has 4 electoral constituencies: South (23 seats), Centre (21), North (9), East (7)."},
    {module: 2, q: "Which constituency has the most seats?", options: ["Centre", "South", "North", "East"], correct: 1, explanation: "The South constituency (cantons Esch-sur-Alzette and Capellen) has the most with 23 seats."},
    {module: 2, q: "What is the minimum age to vote in Luxembourg?", options: ["16", "18", "21", "25"], correct: 1, explanation: "You must be at least 18 years old, a Luxembourg national, and enjoy civic/political rights to vote."},
    {module: 2, q: "Who is the current head of state of Luxembourg?", options: ["Grand Duke Jean", "Grand Duke Henri", "Grand Duchess Charlotte", "The Prime Minister"], correct: 1, explanation: "Grand Duke Henri acceded to the throne on 7 October 2000."},
    {module: 2, q: "What does 'inviolable' mean regarding the Grand Duke?", options: ["He cannot be removed from office", "He cannot be charged or prosecuted", "He has absolute power", "He cannot leave the country"], correct: 1, explanation: "The Grand Duke is inviolable, meaning he cannot be charged or prosecuted. He has complete political immunity."},
    {module: 2, q: "How many district courts does Luxembourg have?", options: ["1", "2", "3", "4"], correct: 1, explanation: "Luxembourg has 2 district courts: one in Luxembourg City and one in Diekirch."},
    {module: 2, q: "How long is a municipal council term?", options: ["4 years", "5 years", "6 years", "7 years"], correct: 2, explanation: "Municipal councils are elected for 6-year terms."},
    {module: 2, q: "What is a 'projet de loi'?", options: ["A bill proposed by an MP", "A government-initiated draft law", "A constitutional amendment", "A municipal regulation"], correct: 1, explanation: "A 'projet de loi' is a government-initiated draft law. An MP-initiated bill is called a 'proposition de loi'."},
    {module: 2, q: "How many professional chambers exist in Luxembourg?", options: ["4", "5", "6", "8"], correct: 2, explanation: "There are 6 professional chambers: 3 for employers (Commerce, Trades, Agriculture) and 3 for workers (Private Employees, Civil Servants, Labour)."},
    {module: 2, q: "What happens after the first parliamentary vote on a law?", options: ["It goes to the Grand Duke", "A second vote is required after 3 months (unless Council of State waives)", "It becomes law immediately", "It goes to referendum"], correct: 1, explanation: "A second constitutional vote is required at least 3 months after the first, unless the Council of State grants a dispensation (waiver)."},
    {module: 2, q: "Where are laws published to take legal effect?", options: ["The Journal Officiel", "The Memorial", "The Gazette", "The Parliamentary Record"], correct: 1, explanation: "Laws are published in the Memorial (official gazette/compendium of legislation) to acquire legal status."},
    {module: 2, q: "Can an MP simultaneously be a government minister?", options: ["Yes", "No, it's incompatible", "Only the Prime Minister", "Only with Council of State approval"], correct: 1, explanation: "The office of MP is incompatible with being a government member, judge, or member of the Council of State."},
    {module: 2, q: "How long must a foreign national reside in Luxembourg to vote in municipal elections?", options: ["1 year", "3 years", "5 years", "7 years"], correct: 2, explanation: "Foreign nationals can vote in municipal elections if domiciled in Luxembourg for at least 5 years."},
    {module: 2, q: "How many MEPs does Luxembourg have in the European Parliament?", options: ["4", "6", "8", "10"], correct: 1, explanation: "Luxembourg has 6 representatives in the European Parliament."},
    {module: 2, q: "What is the role of the Council of State?", options: ["It governs the country", "It acts as a moderating second chamber with advisory role", "It is the supreme court", "It commands the army"], correct: 1, explanation: "The Council of State acts as a moderating influence of a second chamber in Luxembourg's unicameral system. It gives opinions on all legislation."},
    {module: 2, q: "Luxembourg's Parliament is:", options: ["Bicameral", "Unicameral", "Tricameral", "Federal"], correct: 1, explanation: "Luxembourg has a unicameral system (single chamber). The Council of State serves as a moderating second chamber but is not a true legislative chamber."},
    {module: 2, q: "What is Luxembourg's only territorial subdivision?", options: ["Provinces", "Departments", "Cantons", "Municipalities"], correct: 3, explanation: "Municipalities are Luxembourg's only political subdivision. There are no provinces or departments."},
    {module: 2, q: "Who formally appoints the government?", options: ["The Parliament", "The Grand Duke", "The Council of State", "The people by referendum"], correct: 1, explanation: "The Grand Duke formally appoints the government. In practice, he appoints a formateur based on election results who becomes Prime Minister."},
    {module: 2, q: "How many seats does the Centre constituency have?", options: ["7", "9", "21", "23"], correct: 2, explanation: "The Centre constituency (cantons Luxembourg and Mersch) has 21 seats."},
    {module: 2, q: "How many seats does the North constituency have?", options: ["7", "9", "21", "23"], correct: 1, explanation: "The North constituency (cantons Diekirch, Redange, Wiltz, Clervaux, Vianden) has 9 seats."},
    {module: 2, q: "How many seats does the East constituency have?", options: ["6", "7", "9", "12"], correct: 1, explanation: "The East constituency (cantons Grevenmacher, Remich, Echternach) has 7 seats."},
    {module: 2, q: "What is a 'proposition de loi'?", options: ["A government-initiated bill", "An MP-initiated bill", "A Council of State opinion", "A municipal bylaw"], correct: 1, explanation: "A 'proposition de loi' is a bill initiated by a Member of Parliament. A government-initiated bill is a 'projet de loi'."},
    {module: 2, q: "How long is a parliamentary term in Luxembourg?", options: ["4 years", "5 years", "6 years", "7 years"], correct: 1, explanation: "Members of Parliament are elected for 5-year terms."},
    {module: 2, q: "What must every act of the Grand Duke have?", options: ["Approval by referendum", "Countersignature by a government member", "Council of State approval", "Supreme Court validation"], correct: 1, explanation: "Every measure by the Grand Duke must be countersigned by a responsible government member, who takes political responsibility for it."},
    {module: 2, q: "What is a 'motion of censure'?", options: ["A criminal charge", "A negative vote by Parliament forcing government resignation", "A court ruling", "A Grand-Ducal decree"], correct: 1, explanation: "A motion of censure (vote of no confidence) forces ministers to resign if Parliament gives them a negative vote."},
    {module: 2, q: "Who leads the government?", options: ["The Grand Duke", "The Prime Minister", "The President of the Council of State", "The Speaker of Parliament"], correct: 1, explanation: "The Prime Minister leads the government. In practice, the Grand Duke appoints a formateur who becomes PM."},
    {module: 2, q: "Which are the three employer chambers?", options: ["Commerce, Trades, Agriculture", "Labour, Commerce, Trades", "Agriculture, Labour, Civil Servants", "Commerce, Finance, Industry"], correct: 0, explanation: "The three employer chambers are: Chamber of Commerce, Chamber of Trades, and Chamber of Agriculture."},
    {module: 2, q: "Which are the three worker chambers?", options: ["Labour, Commerce, Agriculture", "Private Employees, Civil Servants, Labour", "Trades, Commerce, Labour", "Labour, Finance, Education"], correct: 1, explanation: "The three worker chambers are: Chamber of Private Employees, Chamber of Civil Servants and Public Employees, and Chamber of Labour."},
    {module: 2, q: "What is the Economic and Social Council (CES)?", options: ["A court", "An advisory body on economic/financial/social issues", "Part of the government", "A trade union"], correct: 1, explanation: "The Economic and Social Council is an advisory body that gives opinions on economic, financial, and social problems and delivers an annual report."},
    {module: 2, q: "How many judges sit on the Court of Cassation?", options: ["3", "5", "9", "21"], correct: 1, explanation: "The Court of Cassation (part of the Supreme Court of Justice) has 5 judges."},
    {module: 2, q: "How many chambers does the Court of Appeal have?", options: ["3", "5", "9", "12"], correct: 2, explanation: "The Court of Appeal (part of the Supreme Court of Justice) has 9 chambers with 35 judges."},
    {module: 2, q: "What is the maximum amount for cases at magistrates' courts?", options: ["1,000 euros", "5,000 euros", "10,000 euros", "50,000 euros"], correct: 2, explanation: "Magistrates' courts (justices de paix) handle minor civil cases up to 10,000 euros."},
    {module: 2, q: "Where are the magistrates' courts located?", options: ["Luxembourg and Diekirch only", "Luxembourg, Esch-sur-Alzette, and Diekirch", "One in each canton", "Luxembourg City only"], correct: 1, explanation: "There are 3 magistrates' courts (justices de paix) located in Luxembourg, Esch-sur-Alzette, and Diekirch."},
    {module: 2, q: "What type of court handles appeals against administrative decisions?", options: ["District Court", "Constitutional Court", "Administrative Tribunal and Administrative Court", "Court of Cassation"], correct: 2, explanation: "The Administrative Tribunal (first instance) and Administrative Court (appeal) handle challenges to administrative decisions."},
    {module: 2, q: "What happens if the population of a municipality is under 3,000?", options: ["It must merge with another", "Elections use relative majority system", "It has no council", "It uses proportional representation"], correct: 1, explanation: "Municipalities under 3,000 population use a relative majority system for elections. Those over 3,000 use proportional representation."},
    {module: 2, q: "Who manages a municipality day-to-day?", options: ["The Grand Duke", "The mayor and municipal executives (college echevinal)", "A government-appointed prefect", "The district court"], correct: 1, explanation: "Day-to-day management of a municipality is handled by the mayor and the municipal executives (college echevinal)."},
    {module: 2, q: "The Grand Duke acceded to the throne on:", options: ["23 June 1999", "7 October 2000", "1 January 2001", "15 March 1998"], correct: 1, explanation: "Grand Duke Henri acceded to the throne on 7 October 2000."},
    {module: 2, q: "Which dynasty currently rules Luxembourg?", options: ["Habsburg", "Bourbon", "Nassau", "Windsor"], correct: 2, explanation: "The House of Nassau has ruled Luxembourg since 1890 when Adolphe of Nassau became Grand Duke."},
    {module: 2, q: "The Council of State's veto power is:", options: ["Absolute - it can permanently block laws", "Suspensive only - it can delay but not block", "It has no veto power", "Only for constitutional amendments"], correct: 1, explanation: "The Council of State has only a suspensive veto: it can refuse the waiver of the second vote, delaying a law by at least 3 months, but cannot permanently block it."},
    {module: 2, q: "What role does the Grand Duke play in legislation?", options: ["He writes the laws", "He sanctions and promulgates laws", "He has no role", "He can veto any law permanently"], correct: 1, explanation: "The Grand Duke sanctions (formally approves) and promulgates (officially publishes) laws, but this is a formal role, not a political one."},
    {module: 2, q: "Which cantons make up the South constituency?", options: ["Luxembourg and Mersch", "Esch-sur-Alzette and Capellen", "Diekirch and Redange", "Grevenmacher and Remich"], correct: 1, explanation: "The South constituency consists of the cantons of Esch-sur-Alzette and Capellen, with 23 seats."},
    {module: 2, q: "Can voters distribute votes across multiple party lists?", options: ["No, they must vote for one list only", "Yes, they can give preferential votes across lists", "Only in municipal elections", "Only in European elections"], correct: 1, explanation: "Voters have as many votes as seats to fill and can distribute preferential votes across multiple party lists (panachage)."},
    {module: 2, q: "What ensures fair representation of small parties?", options: ["First-past-the-post system", "Principle of smallest electoral quotient", "Reserved seats for minorities", "Government appointment"], correct: 1, explanation: "The principle of the smallest electoral quotient ensures fair representation of small parties in Luxembourg's proportional system."},
    {module: 2, q: "The separation of powers in Luxembourg is:", options: ["Strict between all three branches", "Flexible between legislative and executive; judiciary is independent", "Non-existent", "Only between Parliament and courts"], correct: 1, explanation: "The separation of powers is flexible between legislative and executive branches (they are linked), but the judicial power is completely independent."},
    {module: 2, q: "What party was founded in 1902?", options: ["CSV", "LSAP (Luxembourg Socialist Workers' Party)", "DP", "The Greens"], correct: 1, explanation: "The LSAP (Luxembourg Socialist Workers' Party / Social Democrats) was founded in 1902."},
    {module: 2, q: "What party was founded in 1921?", options: ["CSV", "DP", "Communist Party", "ADR"], correct: 2, explanation: "The Communist Party of Luxembourg was founded in 1921, splitting from the Social Democrats."},
    {module: 2, q: "What is the CSV?", options: ["Court of State Verification", "Christian Social Party", "Centre for Social Values", "Council of State Validation"], correct: 1, explanation: "CSV stands for Chrëschtlech Sozial Vollekspartei - the Christian Social Party, a centre-right party historically dominant in Luxembourg politics."},
    {module: 2, q: "What is the DP?", options: ["Democratic Party (liberal)", "Department of Police", "Duchy Parliament", "Defence Programme"], correct: 0, explanation: "The DP (Demokratesch Partei) is the Democratic Party, Luxembourg's liberal political party."},
    {module: 2, q: "What does ADR stand for?", options: ["Alternative and Democratic Reform Party", "Alliance for Democratic Rights", "Assembly of Democratic Representatives", "Action for Direct Representation"], correct: 0, explanation: "ADR stands for Alternativ Demokratesch Reformpartei - the Alternative and Democratic Reform Party."},
    {module: 2, q: "Who can stand for parliamentary election?", options: ["Any resident over 21", "Luxembourg national, at least 18, domiciled in country", "Any EU citizen over 25", "Only members of political parties"], correct: 1, explanation: "To stand for parliamentary election you must be a Luxembourg national, at least 18 years old, and domiciled in the Grand Duchy."},
    {module: 2, q: "What loses you the right to vote in Luxembourg?", options: ["Bankruptcy", "Criminal conviction removing civic rights", "Living abroad temporarily", "Changing religion"], correct: 1, explanation: "You lose the right to vote if convicted of a criminal offence that removes your civic and political rights."},
    {module: 2, q: "The professional chambers must be consulted on:", options: ["All government decisions", "Relevant legislation in their field", "Foreign policy only", "Military matters"], correct: 1, explanation: "The 6 professional chambers must be consulted on legislation relevant to their respective fields."},
    {module: 2, q: "How many cantons does Luxembourg have?", options: ["4", "8", "12", "105"], correct: 2, explanation: "Luxembourg is divided into 12 cantons: Capellen, Clervaux, Diekirch, Echternach, Esch-sur-Alzette, Grevenmacher, Luxembourg, Mersch, Redange, Remich, Vianden, Wiltz."},
    {module: 2, q: "How many judicial districts does Luxembourg have?", options: ["1", "2", "3", "4"], correct: 1, explanation: "Luxembourg has 2 judicial districts: Luxembourg and Diekirch."},
    {module: 2, q: "What is the relationship between state and municipalities?", options: ["Municipalities are fully independent", "The state supervises municipalities (tutelle)", "Municipalities control the state", "There is no relationship"], correct: 1, explanation: "There is an interaction (tutelle/supervision) between state and municipalities, where the state oversees municipal governance."},
    {module: 2, q: "Who can dissolve Parliament?", options: ["The Prime Minister alone", "The Grand Duke (on advice of government)", "The Council of State", "Parliament itself by majority vote"], correct: 1, explanation: "The Grand Duke has the formal right to dissolve Parliament, though this is done on the advice of the government."},

    // ===== MODULE 3 - History & European Integration (60 questions) =====
    {module: 3, q: "In what year did Count Siegfried acquire Lucilinburhuc?", options: ["800", "963", "1050", "1143"], correct: 1, explanation: "In 963, Count Siegfried acquired the small fort 'Lucilinburhuc' (small castle) from the Abbey of St Maximin of Trier."},
    {module: 3, q: "What does 'Lucilinburhuc' mean?", options: ["Great fortress", "Small castle", "River crossing", "Holy place"], correct: 1, explanation: "Lucilinburhuc means 'small castle' - it was built on the Bock promontory above the Alzette valley."},
    {module: 3, q: "When was the County of Luxembourg elevated to a Duchy?", options: ["1308", "1354", "1443", "1815"], correct: 1, explanation: "In 1354, Emperor Charles IV (of the Luxembourg dynasty) elevated the County to a Duchy."},
    {module: 3, q: "The Treaty of London (1839) established:", options: ["Luxembourg's neutrality", "Luxembourg's independence", "The ECSC", "The end of WWII"], correct: 1, explanation: "The Treaty of London of 19 April 1839 is considered the official birthday of independent Luxembourg. It divided the territory, with the remaining part becoming the independent Grand Duchy."},
    {module: 3, q: "What happened in 1867?", options: ["Independence from Netherlands", "Fortress dismantled, neutrality declared", "First constitution", "Steel crisis"], correct: 1, explanation: "The 1867 Treaty of London resolved the Luxembourg Crisis: the fortress was dismantled, perpetual neutrality was declared, and the Prussian garrison withdrew."},
    {module: 3, q: "Who was Adolphe of Nassau?", options: ["The last Dutch king over Luxembourg", "The first Grand Duke of Luxembourg's own dynasty", "The architect of the fortress", "The first Prime Minister"], correct: 1, explanation: "Adolphe of Nassau became Grand Duke in 1890 when William III died without a male heir, ending the personal union with the Netherlands and establishing Luxembourg's own dynasty."},
    {module: 3, q: "What year was the current Luxembourg Constitution adopted?", options: ["1839", "1848", "1867", "1868"], correct: 3, explanation: "The current (fourth) Constitution was adopted in 1868, a compromise between the liberal 1848 and reactionary 1856 versions. It has been heavily amended since."},
    {module: 3, q: "When did Germany invade Luxembourg in WWII?", options: ["1 September 1939", "10 May 1940", "7 December 1941", "6 June 1944"], correct: 1, explanation: "Nazi Germany invaded Luxembourg on 10 May 1940."},
    {module: 3, q: "Who went into exile during WWII?", options: ["Grand Duke Henri", "Grand Duchess Marie-Adelaide", "Grand Duchess Charlotte and the government", "The entire population"], correct: 2, explanation: "Grand Duchess Charlotte and the government went into exile during WWII."},
    {module: 3, q: "What was the ECSC?", options: ["European Court for Social Cooperation", "European Coal and Steel Community", "European Council for State Commerce", "Economic Community for Steel and Coal"], correct: 1, explanation: "The European Coal and Steel Community was founded in 1951. Luxembourg was a founding member and Luxembourg City became its headquarters."},
    {module: 3, q: "Luxembourg is a founding member of which organizations?", options: ["UN, NATO, EU (ECSC)", "Only the EU", "NATO and UN only", "EU and Council of Europe only"], correct: 0, explanation: "Luxembourg is a founding member of the UN (1945), NATO (1949), Council of Europe (1949), and the ECSC/EEC/EU (1951/1957)."},
    {module: 3, q: "When was the Schengen Agreement signed?", options: ["1957", "1985", "1992", "1999"], correct: 1, explanation: "The Schengen Agreement was signed in 1985 (named after a Luxembourg village) and came into force in 1995."},
    {module: 3, q: "Which town gave its name to the Schengen Agreement?", options: ["Echternach", "Schengen (Luxembourg village)", "Diekirch", "Vianden"], correct: 1, explanation: "Schengen is a small village in Luxembourg on the Moselle river, where the agreement was signed in 1985."},
    {module: 3, q: "When was the University of Luxembourg founded?", options: ["1957", "1985", "2003", "2010"], correct: 2, explanation: "The University of Luxembourg was founded in 2003 (law of 12 August 2003, academic year 2003/2004)."},
    {module: 3, q: "What triggered Luxembourg's transition from steel to finance?", options: ["EU regulation", "Steel crisis starting 1974", "WWII destruction", "Discovery of oil"], correct: 1, explanation: "The steel crisis beginning in 1974 forced economic diversification. The 1929 holding company law had already planted seeds for the financial sector, which boomed from the 1960s."},
    {module: 3, q: "When did Luxembourg renounce its neutrality?", options: ["1918", "1939", "1948", "1957"], correct: 2, explanation: "Luxembourg officially renounced its neutrality in 1948, joining NATO the following year in 1949."},
    {module: 3, q: "What was the result of the 1919 referendum?", options: ["Republic established", "78% voted for monarchy", "Union with France", "Union with Belgium"], correct: 1, explanation: "In September 1919, 78% voted in favour of keeping the constitutional monarchy after Grand Duchess Charlotte replaced Marie-Adelaide."},
    {module: 3, q: "When was dual citizenship permitted in Luxembourg?", options: ["1999", "2003", "2008", "2015"], correct: 2, explanation: "Dual citizenship was permitted in Luxembourg from 2008 onwards."},
    {module: 3, q: "The 'Muzzle Law' referendum of 1937 concerned:", options: ["Press censorship", "Prohibition of the Communist Party", "Language rights", "Military service"], correct: 1, explanation: "The 1937 referendum asked whether to prohibit the Communist Party. 50.7% voted AGAINST the prohibition, so it failed."},
    {module: 3, q: "Who was Henry VII of Luxembourg?", options: ["The first Grand Duke", "A medieval count elected King/Emperor of the Holy Roman Empire", "A 19th century Prime Minister", "The founder of the steel industry"], correct: 1, explanation: "Count Henry VII was elected King of the Holy Roman Empire in 1308 and crowned Emperor in Rome in 1312."},
    {module: 3, q: "Which treaty created the European Union?", options: ["Treaty of Rome (1957)", "Treaty of Maastricht (1992)", "Treaty of Lisbon (2007)", "Treaty of Amsterdam (1997)"], correct: 1, explanation: "The Treaty of Maastricht (1992) formally created the European Union and decided on the common currency."},
    {module: 3, q: "The national anthem 'Ons Heemecht' was written in:", options: ["1815", "1839", "1859", "1890"], correct: 2, explanation: "'Ons Heemecht' (Our Homeland) was written in 1859 by Michel Lentz (lyrics) and Jean-Antoine Zinnen (music). First performed publicly in Ettelbruck in 1864."},
    {module: 3, q: "What is the Law of 24 February 1984 about?", options: ["Citizenship requirements", "Language status - making Letzebuergesch the national language", "European integration", "Municipal elections"], correct: 1, explanation: "The Law of 24 February 1984 established the linguistic status of Luxembourg's three languages and made Letzebuergesch the national language."},
    {module: 3, q: "How many Luxembourgers were Presidents of the European Commission?", options: ["1", "2", "3", "4"], correct: 2, explanation: "Three: Gaston Thorn (1981-85), Jacques Santer (1995-99), and Jean-Claude Juncker (2014-19)."},
    {module: 3, q: "Luxembourg's national day is on:", options: ["19 April", "10 May", "23 June", "23 January"], correct: 2, explanation: "National Day is 23 June (set by decree of 23 December 1961). It's officially the 'day of public celebration of the Grand Duke's birthday'."},
    {module: 3, q: "What is the BLEU/UEBL?", options: ["Belgium-Luxembourg Economic Union (1921)", "Benelux League of European Unity", "Belgian-Luxembourg Education Unit", "Brussels-Luxembourg Express Union"], correct: 0, explanation: "The Belgium-Luxembourg Economic Union (BLEU/UEBL) was founded in 1921 after the Zollverein collapsed following WWI."},
    {module: 3, q: "When was universal suffrage introduced in Luxembourg?", options: ["1848", "1868", "1919", "1945"], correct: 2, explanation: "Universal suffrage was introduced in 1919 following WWI and the political crisis."},
    {module: 3, q: "What percentage of Luxembourg's population is foreign residents (approx.)?", options: ["15%", "25%", "35%", "47%"], correct: 3, explanation: "As of 2021, approximately 47% of Luxembourg's population are foreign residents - one of the highest rates in the world."},
    {module: 3, q: "How many official languages does Luxembourg have?", options: ["1", "2", "3", "4"], correct: 2, explanation: "Luxembourg has 3 official languages: Luxembourgish (national language), French (legislative/administrative), and German (administrative)."},
    {module: 3, q: "From which abbey did Siegfried acquire the Bock fortress?", options: ["Abbey of Cluny", "Abbey of St Maximin of Trier", "Abbey of Echternach", "Abbey of Orval"], correct: 1, explanation: "Count Siegfried acquired Lucilinburhuc from the Abbey of St Maximin of Trier in 963."},
    {module: 3, q: "On what geographic feature was the original castle built?", options: ["A river island", "The Bock promontory above the Alzette valley", "A mountain peak", "A coastal cliff"], correct: 1, explanation: "The original castle was built on the Bock, a rocky promontory above the Alzette valley."},
    {module: 3, q: "Who conquered Luxembourg in 1443?", options: ["The French King", "Philip the Good, Duke of Burgundy", "The Holy Roman Emperor", "The King of England"], correct: 1, explanation: "Philip the Good, Duke of Burgundy, conquered the town of Luxembourg in 1443, ending the independence of the medieval duchy."},
    {module: 3, q: "How did Luxembourg pass to the Habsburgs?", options: ["Military conquest", "Marriage inheritance from Burgundy (1477)", "Purchase", "Treaty with France"], correct: 1, explanation: "The Burgundian possessions, including Luxembourg, fell to the Habsburgs by marriage in 1477."},
    {module: 3, q: "What happened in the Treaty of the Pyrenees (1659)?", options: ["Luxembourg became independent", "Southern lands of the Duchy (including Thionville) were ceded to France", "Luxembourg joined Germany", "The fortress was built"], correct: 1, explanation: "The Treaty of the Pyrenees in 1659 saw Philip IV cede the southern lands of the Duchy, including Thionville, to France."},
    {module: 3, q: "Who conquered the entire Duchy in 1684?", options: ["Prussia", "Spain", "Louis XIV's France", "England"], correct: 2, explanation: "In 1684, the entire Duchy was conquered by Louis XIV's France, though it was returned in 1697."},
    {module: 3, q: "What happened to Luxembourg in 1795?", options: ["It became independent", "Conquered by France, abolished as duchy, became Departement des Forets", "Joined Prussia", "Remained neutral"], correct: 1, explanation: "In 1795, the Duchy was conquered and abolished by the French Republic and divided into departments including the Departement des Forets."},
    {module: 3, q: "The Congress of Vienna (1815) made Luxembourg a:", options: ["Republic", "Grand Duchy in personal union with Netherlands", "Province of Belgium", "Part of Prussia"], correct: 1, explanation: "The Congress of Vienna created the Grand Duchy of Luxembourg in personal union with the King of the Netherlands (William I of Orange-Nassau)."},
    {module: 3, q: "What military presence was in Luxembourg after 1815?", options: ["French garrison", "British garrison", "Prussian garrison", "Austrian garrison"], correct: 2, explanation: "After 1815, a Prussian garrison guarded the fortress of Luxembourg as part of the German Confederation arrangements."},
    {module: 3, q: "What happened during the Belgian Revolution of 1830?", options: ["Luxembourg declared a republic", "Luxembourg joined the Belgian revolt but the fortress stayed Dutch", "Luxembourg stayed loyal to Netherlands", "Luxembourg invaded Belgium"], correct: 1, explanation: "During the Belgian Revolution of 1830, Luxembourg joined the revolt, but the fortress remained under Dutch/Prussian control."},
    {module: 3, q: "What was lost in the 1839 Treaty of London?", options: ["The fortress", "The western 2/3 of Luxembourg (became Belgian province)", "All industry", "The royal family"], correct: 1, explanation: "The 1839 Treaty divided Luxembourg: the western 2/3 became a Belgian province of Luxembourg, while the remaining eastern part became the independent Grand Duchy."},
    {module: 3, q: "Luxembourg joined the German Customs Union (Zollverein) in:", options: ["1815", "1839", "1842", "1867"], correct: 2, explanation: "Luxembourg joined the Zollverein in 1842, which boosted economic development and the start of iron ore mining."},
    {module: 3, q: "What was the Thomas process?", options: ["A political reform", "A method to dephosphorise iron ore for steelmaking", "An educational system", "A diplomatic protocol"], correct: 1, explanation: "The Thomas process (1879, licence bought by Emile Metz) allowed dephosphorisation of Luxembourg's phosphorus-rich iron ore, making it usable for steel."},
    {module: 3, q: "Who bought the Thomas process licence in 1879?", options: ["ARBED", "Emile Metz", "Philip the Good", "Adolphe of Nassau"], correct: 1, explanation: "Emile Metz bought the licence for the Thomas process in 1879, enabling Luxembourg's steel industry boom."},
    {module: 3, q: "Where was the first integrated steelworks built (1886)?", options: ["Luxembourg City", "Esch-sur-Alzette", "Dudelange", "Diekirch"], correct: 2, explanation: "The first integrated steelworks was built in Dudelange in 1886."},
    {module: 3, q: "What ended the personal union with the Netherlands in 1890?", options: ["A revolution", "William III died without male heir", "A referendum", "A war"], correct: 1, explanation: "King-Grand Duke William III died in 1890 without a male heir, ending the personal union with the Netherlands. Adolphe of Nassau became the first Grand Duke of Luxembourg's own dynasty."},
    {module: 3, q: "When was the first railway line in Luxembourg opened?", options: ["1842", "1859", "1867", "1879"], correct: 1, explanation: "The first railway line in Luxembourg was opened in 1859."},
    {module: 3, q: "Which Grand Duchess reigned during World War I?", options: ["Charlotte", "Marie-Adelaide", "Elisabeth", "Josephine"], correct: 1, explanation: "Grand Duchess Marie-Adelaide reigned during WWI and was later accused of collaboration for meeting with Emperor William II."},
    {module: 3, q: "Who replaced Marie-Adelaide as Grand Duchess?", options: ["Charlotte (her sister)", "Elisabeth (her daughter)", "Josephine (her mother)", "Henri (her brother)"], correct: 0, explanation: "Marie-Adelaide abdicated in January 1919 in favour of her sister Charlotte, who reigned until 1964."},
    {module: 3, q: "How many Luxembourgers served in the French Foreign Legion during WWI?", options: ["100+", "500+", "1,000+", "5,000+"], correct: 2, explanation: "Over 1,000 Luxembourgers served in the French Foreign Legion during World War I."},
    {module: 3, q: "What was the result of the 2005 European Constitution referendum?", options: ["80% for", "56% for, 44% against", "51% against", "Boycotted"], correct: 1, explanation: "In the 2005 referendum on the European Constitution, Luxembourg voted 56% for and 44% against."},
    {module: 3, q: "When was ARBED created?", options: ["1879", "1886", "1911", "1929"], correct: 2, explanation: "ARBED (Acieries Reunies de Burbach-Eich-Dudelange) was created in 1911, becoming Luxembourg's leading steel group."},
    {module: 3, q: "What is the evolution of ARBED?", options: ["ARBED > Mittal > Arcelor", "ARBED > Arcelor (2002) > ArcelorMittal (2006)", "ARBED > SES > RTL", "ARBED still exists today"], correct: 1, explanation: "ARBED merged into Arcelor in 2002, which then merged with Mittal Steel in 2006 to form ArcelorMittal, the world's leading steel producer."},
    {module: 3, q: "When did the last mine close in Luxembourg?", options: ["1974", "1981", "1997", "2002"], correct: 1, explanation: "Luxembourg closed its last mine in 1981. The last blast furnace closed in 1997."},
    {module: 3, q: "When did the last blast furnace close?", options: ["1981", "1992", "1997", "2006"], correct: 2, explanation: "The last blast furnace closed in 1997. After that, steel was only produced using electricity."},
    {module: 3, q: "What law of 1929 seeded the financial sector?", options: ["Banking regulation law", "Law on holding companies", "Foreign investment law", "Tax reform law"], correct: 1, explanation: "The law on holding companies (July 1929) laid the groundwork for Luxembourg's financial sector development."},
    {module: 3, q: "Luxembourg is the world's ___ largest investment fund centre:", options: ["Largest", "2nd largest (after US)", "3rd largest", "5th largest"], correct: 1, explanation: "Luxembourg is the 2nd largest investment fund centre in the world, after the United States."},
    {module: 3, q: "When did Goodyear establish operations in Luxembourg?", options: ["1929", "1949", "1962", "1985"], correct: 1, explanation: "Goodyear arrived in Luxembourg in 1949, one of the first major US companies to establish operations there."},
    {module: 3, q: "What is RTL Group?", options: ["A steel company", "Leading European TV/radio broadcaster based in Luxembourg", "A bank", "A satellite company"], correct: 1, explanation: "RTL Group is the leading European TV and radio broadcaster. It received its radio concession in 1929 and TV in 1955."},
    {module: 3, q: "What is SES?", options: ["A banking group", "World's leading satellite operator", "A steel company", "A political party"], correct: 1, explanation: "SES (Societe Europeenne des Satellites) is the world's leading satellite operator, with 50+ satellites. It was granted Luxembourg orbital positions in 1988."},
    {module: 3, q: "When was the Schengen Agreement's entry into force?", options: ["1985", "1990", "1992", "1995"], correct: 3, explanation: "The Schengen Agreement was signed in 1985 but only came into force in 1995."},
    {module: 3, q: "What happened in the 2015 referendum?", options: ["Approved EU constitution", "Rejected voting rights for foreign residents (80% against)", "Approved dual citizenship", "Rejected same-sex marriage"], correct: 1, explanation: "In 2015, a referendum on extending voting rights to foreign residents was rejected by approximately 80% of voters."},
    {module: 3, q: "When did Luxembourg's Parliament vote for same-sex marriage?", options: ["2008", "2013", "2014", "2017"], correct: 2, explanation: "The Chamber of Deputies voted in favour of same-sex marriage in 2014."},
    {module: 3, q: "How many young men were forcibly conscripted by Nazi Germany?", options: ["~5,000", "~8,000", "~11,000", "~20,000"], correct: 2, explanation: "Approximately 11,000 young Luxembourgers were forcibly conscripted into the German military during WWII."},
    {module: 3, q: "When was Luxembourg completely liberated in WWII?", options: ["9 September 1944", "16 December 1944", "22 February 1945", "8 May 1945"], correct: 2, explanation: "Luxembourg was completely liberated on 22 February 1945, after the Battle of the Bulge counter-offensive (16 December 1944)."},
    {module: 3, q: "What percentage of the population was lost during WWII?", options: ["0.5%", "1%", "2%", "5%"], correct: 2, explanation: "Approximately 2% of Luxembourg's total population lost their lives during WWII."},
    {module: 3, q: "What was the Battle of the Bulge?", options: ["A WWI battle", "A German counter-offensive in Dec 1944", "The liberation of Luxembourg City", "A diplomatic crisis"], correct: 1, explanation: "The Battle of the Bulge was a German counter-offensive launched on 16 December 1944. Luxembourg was fully liberated on 22 February 1945."},
    {module: 3, q: "What was the Marshall Plan?", options: ["A military alliance", "US economic aid for post-war European reconstruction", "A constitution", "A trade agreement"], correct: 1, explanation: "The Marshall Plan was US economic aid for post-war European reconstruction. Luxembourg accepted it in 1948 through OEEC membership."},
    {module: 3, q: "Luxembourg City was chosen as headquarters for the ECSC in:", options: ["1949", "1951", "1952", "1957"], correct: 2, explanation: "Luxembourg City was chosen as the seat of the European Coal and Steel Community in 1952."},
    {module: 3, q: "What is the Kirchberg quarter known for?", options: ["Steel factories", "Housing EU institutions", "Medieval old town", "The Grand-Ducal palace"], correct: 1, explanation: "The Kirchberg quarter (developed from 1963) houses EU institutions including the CJEU, European Court of Auditors, EIB, and Eurostat."},
    {module: 3, q: "Luxembourg joined the European Space Agency in:", options: ["1985", "1995", "2003", "2005"], correct: 3, explanation: "Luxembourg joined the European Space Agency in 2005."},
    {module: 3, q: "The Euro was introduced as banknotes/coins in:", options: ["1999", "2000", "2001", "2002"], correct: 3, explanation: "The Euro was introduced electronically in 1999 and as physical banknotes and coins in 2002."},
    {module: 3, q: "What is the area of Luxembourg?", options: ["998 km²", "2,586 km²", "5,200 km²", "10,400 km²"], correct: 1, explanation: "Luxembourg has an area of 2,586 km², making it one of Europe's smallest countries."},
    {module: 3, q: "What is Luxembourg's highest point?", options: ["The Bock (300m)", "Buurgplaatz (559m)", "Wilwerdange (560m)", "Kneiff (547m)"], correct: 2, explanation: "Luxembourg's highest point is 560m at Wilwerdange in the Oesling region."},
    {module: 3, q: "What are Luxembourg's two natural regions?", options: ["North and South", "Oesling (north, 32%) and Gutland (south, 68%)", "Moselle and Ardennes", "Minett and Kirchberg"], correct: 1, explanation: "Luxembourg has two natural regions: the Oesling (north, 32% of territory, part of the Ardennes) and the Gutland (south/centre, 68%)."},
    {module: 3, q: "Which country borders Luxembourg to the east?", options: ["Belgium", "France", "Germany", "Netherlands"], correct: 2, explanation: "Luxembourg is bordered by Belgium (west), Germany (east), and France (south)."},
    {module: 3, q: "What is the 'Minett' region?", options: ["The financial district", "The former iron ore mining region in the south", "The wine region", "The Ardennes forest"], correct: 1, explanation: "The Minett (also called Terres Rouges/Red Lands) is the former iron ore mining region in the south, including towns like Esch-sur-Alzette, Differdange, and Dudelange."},
    {module: 3, q: "What is the largest city in Luxembourg after Luxembourg City?", options: ["Diekirch", "Differdange", "Esch-sur-Alzette", "Vianden"], correct: 2, explanation: "Esch-sur-Alzette is Luxembourg's second largest city (32,600 inhabitants), after Luxembourg City (107,200)."},
    {module: 3, q: "Who wrote the lyrics to 'Ons Heemecht'?", options: ["Jean-Antoine Zinnen", "Michel Lentz", "Emile Metz", "Adolphe of Nassau"], correct: 1, explanation: "Michel Lentz wrote the lyrics to 'Ons Heemecht' (1859). Jean-Antoine Zinnen composed the music."},
    {module: 3, q: "Who composed the music for 'Ons Heemecht'?", options: ["Michel Lentz", "Jean-Antoine Zinnen", "Dicks (Edmond de la Fontaine)", "Nicolas Welter"], correct: 1, explanation: "Jean-Antoine Zinnen composed the music for 'Ons Heemecht'. Michel Lentz wrote the lyrics."},
    {module: 3, q: "Where was 'Ons Heemecht' first performed publicly?", options: ["Luxembourg City", "Esch-sur-Alzette", "Ettelbruck", "Diekirch"], correct: 2, explanation: "'Ons Heemecht' was first performed publicly in Ettelbruck in 1864."},
    {module: 3, q: "What are Luxembourg's flag colours (top to bottom)?", options: ["Blue, white, red", "Red, white, sky blue", "Red, white, dark blue", "White, blue, red"], correct: 1, explanation: "Luxembourg's flag has three horizontal bands: red, white, and sky blue (top to bottom). It differs from the Netherlands flag by using sky blue rather than cobalt blue."},
    {module: 3, q: "What is the difference between Luxembourg's and the Netherlands' flag?", options: ["Different arrangement of colours", "Luxembourg uses sky blue, Netherlands uses cobalt blue", "One has a coat of arms", "They are identical"], correct: 1, explanation: "Luxembourg's flag uses sky blue (Pantone 299 C) while the Netherlands flag uses a darker cobalt blue."},
    {module: 3, q: "The coat of arms features:", options: ["A golden eagle on red", "A red lion on blue and white stripes", "Three crowns", "A cross on white"], correct: 1, explanation: "Luxembourg's coat of arms shows a red lion rampant (crowned, armed and langued in gold with forked tail) on a field of blue and white horizontal stripes (barry of ten argent and azure)."},
    {module: 3, q: "Who established the coat of arms around 1235?", options: ["Count Siegfried", "Count Henry V", "Emperor Charles IV", "Philip the Good"], correct: 1, explanation: "Count Henry V established the Luxembourg coat of arms around 1235."},
    {module: 3, q: "The largest foreign community in Luxembourg is:", options: ["French", "Italian", "Portuguese", "Belgian"], correct: 2, explanation: "The Portuguese community is the largest foreign group, making up about 36% of all foreign residents and 14.9% of the total population."},
    {module: 3, q: "How many cross-border commuters work in Luxembourg (approx. 2019)?", options: ["50,000", "100,000", "200,000", "350,000"], correct: 2, explanation: "Cross-border commuters exceeded 200,000 in 2019, making up about 46% of the labour force."},
    {module: 3, q: "What percentage of Luxembourg's workforce are cross-border workers?", options: ["15%", "25%", "35%", "46%"], correct: 3, explanation: "As of 2021, approximately 46% of Luxembourg's workforce consists of cross-border commuters from France, Belgium, and Germany."},
    {module: 3, q: "In which language is Luxembourg's legislation written?", options: ["Luxembourgish", "German", "French", "All three equally"], correct: 2, explanation: "Luxembourg's legislation is written exclusively in French. Parliamentary debates are in Luxembourgish, and questions to government in French."},
    {module: 3, q: "When was Luxembourgish introduced as a taught subject in primary schools?", options: ["1848", "1912", "1945", "1984"], correct: 1, explanation: "Luxembourgish was introduced as a taught subject in primary schools in 1912."},
    {module: 3, q: "Who was Gaston Thorn?", options: ["A Grand Duke", "President of European Commission (1981-85)", "Founder of ARBED", "Author of the Constitution"], correct: 1, explanation: "Gaston Thorn was a Luxembourger who served as President of the European Commission from 1981 to 1985."},
    {module: 3, q: "Who was Jacques Santer?", options: ["A medieval count", "President of European Commission (1995-99)", "Prime Minister during WWII", "Founder of SES"], correct: 1, explanation: "Jacques Santer was a Luxembourger who served as President of the European Commission from 1995 to 1999."},
    {module: 3, q: "Who was Jean-Claude Juncker?", options: ["President of European Commission (2014-19)", "Current Grand Duke", "Founder of the financial sector", "A WWII resistance leader"], correct: 0, explanation: "Jean-Claude Juncker was President of the European Commission from 2014 to 2019, and previously a long-serving Luxembourg PM."},
    {module: 3, q: "The Treaty of Rome (1957) created:", options: ["NATO", "The EEC (European Economic Community)", "The Council of Europe", "The ECSC"], correct: 1, explanation: "The Treaty of Rome in 1957 created the European Economic Community (EEC). Luxembourg was a founding member."},
    {module: 3, q: "The Treaty of Lisbon was signed in:", options: ["1992", "1997", "2001", "2007"], correct: 3, explanation: "The Treaty of Lisbon was signed in 2007 and entered into force in 2009. It is the current treaty framework of the EU."},
    {module: 3, q: "Luxembourg was named European Capital of Culture in:", options: ["1985 and 2003", "1995 and 2007", "2000 and 2010", "1990 and 2005"], correct: 1, explanation: "Luxembourg City was European Capital of Culture in 1995, and 'Luxembourg and the Greater Region' in 2007. It's the only city awarded twice."},
    {module: 3, q: "What is Benelux?", options: ["A bank", "Economic union of Belgium, Netherlands, Luxembourg", "A satellite system", "A political party"], correct: 1, explanation: "Benelux is an economic union formed from the wartime alliance (1944) between Belgium, the Netherlands, and Luxembourg."},
    {module: 3, q: "How many nationalities are present in Luxembourg?", options: ["50+", "100+", "160+", "200+"], correct: 2, explanation: "More than 160 nationalities are represented in Luxembourg's population."},
    {module: 3, q: "What is the residence requirement for naturalisation?", options: ["3 years", "5 years", "7 consecutive years", "10 years"], correct: 2, explanation: "For naturalisation, you must have a Luxembourg residence permit for at least 7 consecutive years."},
];

// ===== FLASHCARDS =====
const flashcards = [
    // --- MODULE 1: Fundamental Rights ---
    {front: "Declaration of the Rights of Man and of the Citizen?", back: "France, 1789"},
    {front: "Universal Declaration of Human Rights?", back: "1948, United Nations, Paris"},
    {front: "European Convention on Human Rights?", back: "1951, Council of Europe, Strasbourg"},
    {front: "Charter of Fundamental Rights of the EU?", back: "2000, European Union"},
    {front: "Luxembourg's first Constitution?", back: "1848 (liberal, modeled on Belgian)"},
    {front: "Current Constitution?", back: "1868 (fourth constitution, heavily amended)"},
    {front: "Constitutional Court?", back: "9 members; rules on constitutionality of laws; no direct public access"},
    {front: "How does a case reach the Constitutional Court?", back: "Only by referral from a court hearing a case — no direct petition"},
    {front: "Can the Constitutional Court rule on treaties?", back: "No, only on laws"},
    {front: "Where is the ECHR?", back: "Strasbourg — enforces European Convention on Human Rights"},
    {front: "Where is the CJEU?", back: "Luxembourg City (Kirchberg) — enforces EU Charter of Fundamental Rights"},
    {front: "First-generation rights?", back: "Civil & political: liberty, privacy, fair trial, expression, assembly"},
    {front: "Second-generation rights?", back: "Social & economic: work, social security, health, education"},
    {front: "Constitutional objectives (3rd gen)?", back: "Environment, natural resources, sustainable development"},
    {front: "Limitations on fundamental rights?", back: "Age, incapacity, criminal conviction, nationality"},
    {front: "Can ordinary judges set aside laws?", back: "Yes, if they conflict with international treaties"},
    {front: "Before applying to ECHR you must...?", back: "Exhaust all domestic remedies first"},
    {front: "EU citizens' extra rights in Luxembourg?", back: "Vote in European and municipal elections (after 5 years residency)"},

    // --- MODULE 2: Institutions ---
    {front: "How many MPs in Parliament?", back: "60 MPs, elected for 5-year terms"},
    {front: "Council of State members?", back: "21 members, appointed by Grand Duke"},
    {front: "Electoral constituencies?", back: "4: South (23), Centre (21), North (9), East (7)"},
    {front: "Is voting compulsory?", back: "Yes, for all registered voters"},
    {front: "Head of State?", back: "Grand Duke Henri (since 7 October 2000)"},
    {front: "Form of government?", back: "Parliamentary democracy, constitutional monarchy"},
    {front: "Grand Duke's inviolability?", back: "Cannot be charged or prosecuted; all acts need minister's countersignature"},
    {front: "Who leads the government?", back: "Prime Minister (formateur appointed by Grand Duke)"},
    {front: "What is a 'projet de loi'?", back: "Government-initiated draft law"},
    {front: "What is a 'proposition de loi'?", back: "MP-initiated bill"},
    {front: "Legislative second vote rule?", back: "Second vote required after 3+ months, unless Council of State waives"},
    {front: "Council of State's veto?", back: "Suspensive only — can delay but not permanently block"},
    {front: "Where are laws published?", back: "In the Memorial (official gazette)"},
    {front: "Grand Duke's role in legislation?", back: "Sanctions (approves) and promulgates (publishes) — formal, not political"},
    {front: "Motion of censure?", back: "Negative vote by Parliament forcing government to resign"},
    {front: "MP incompatibilities?", back: "Cannot be simultaneously: minister, judge, or Council of State member"},
    {front: "District courts?", back: "2: Luxembourg and Diekirch"},
    {front: "Magistrates' courts?", back: "3: Luxembourg, Esch-sur-Alzette, Diekirch (up to €10,000)"},
    {front: "Court of Cassation?", back: "5 judges (highest ordinary court, part of Supreme Court of Justice)"},
    {front: "Court of Appeal?", back: "9 chambers, 35 judges"},
    {front: "Administrative courts?", back: "Administrative Tribunal (1st instance) + Administrative Court (appeal)"},
    {front: "Municipal council term?", back: "6 years"},
    {front: "Municipality elections - proportional when?", back: "Population over 3,000; otherwise relative majority"},
    {front: "Foreign nationals vote in municipal elections if...?", back: "Domiciled in Luxembourg for at least 5 years"},
    {front: "Luxembourg MEPs?", back: "6 representatives in European Parliament"},
    {front: "Professional chambers?", back: "6 total: Commerce, Trades, Agriculture + Private Employees, Civil Servants, Labour"},
    {front: "Economic and Social Council (CES)?", back: "Advisory body on economic/social issues; annual report"},
    {front: "How many cantons?", back: "12 cantons"},
    {front: "How many judicial districts?", back: "2: Luxembourg and Diekirch"},
    {front: "Luxembourg's only territorial subdivision?", back: "Municipalities (no provinces or departments)"},
    {front: "Separation of powers?", back: "Flexible between legislative/executive; judiciary fully independent"},
    {front: "Voting system (panachage)?", back: "Voters can distribute votes across multiple party lists"},
    {front: "Smallest electoral quotient?", back: "Method ensuring fair representation of small parties"},
    {front: "South constituency cantons?", back: "Esch-sur-Alzette and Capellen (23 seats)"},
    {front: "Centre constituency cantons?", back: "Luxembourg and Mersch (21 seats)"},
    {front: "North constituency cantons?", back: "Diekirch, Redange, Wiltz, Clervaux, Vianden (9 seats)"},
    {front: "East constituency cantons?", back: "Grevenmacher, Remich, Echternach (7 seats)"},
    {front: "CSV?", back: "Christian Social Party (centre-right, historically dominant)"},
    {front: "LSAP?", back: "Luxembourg Socialist Workers' Party (founded 1902)"},
    {front: "DP?", back: "Democratic Party (liberal)"},
    {front: "Dei Greng?", back: "The Greens"},
    {front: "ADR?", back: "Alternative and Democratic Reform Party"},
    {front: "Communist Party?", back: "Founded 1921 (split from Social Democrats)"},
    {front: "Who can dissolve Parliament?", back: "The Grand Duke (on advice of government)"},
    {front: "Unicameral or bicameral?", back: "Unicameral — Council of State acts as moderating second chamber"},

    // --- MODULE 3: History & European Integration ---
    {front: "Count Siegfried - Lucilinburhuc?", back: "963 — 'small castle' on the Bock, from Abbey of St Maximin of Trier"},
    {front: "Henry VII?", back: "1308 — elected King/Emperor of Holy Roman Empire"},
    {front: "County to Duchy?", back: "1354 — Emperor Charles IV elevated it"},
    {front: "Philip the Good conquers Luxembourg?", back: "1443 — Duke of Burgundy"},
    {front: "Luxembourg passes to Habsburgs?", back: "1477 — marriage inheritance from Burgundy"},
    {front: "Treaty of the Pyrenees (1659)?", back: "Southern lands (incl. Thionville) ceded to France"},
    {front: "Louis XIV conquers Luxembourg?", back: "1684 (returned 1697)"},
    {front: "French Republic abolishes Duchy?", back: "1795 — becomes Département des Forêts"},
    {front: "Congress of Vienna (1815)?", back: "Grand Duchy created; union with Netherlands; Prussian garrison"},
    {front: "Belgian Revolution (1830)?", back: "Luxembourg joins revolt; fortress stays Dutch/Prussian"},
    {front: "Treaty of London (1839)?", back: "19 April — independence; western 2/3 becomes Belgian province"},
    {front: "Zollverein?", back: "1842 — Luxembourg joins German Customs Union"},
    {front: "First Constitution?", back: "1848 (liberal, modeled on Belgian)"},
    {front: "First railway?", back: "1859"},
    {front: "Treaty of London 1867?", back: "Perpetual neutrality, fortress dismantled, Prussians leave, exits German Confederation"},
    {front: "Thomas process (1879)?", back: "Emile Metz buys licence — dephosphorisation of iron ore enables steel boom"},
    {front: "First integrated steelworks?", back: "1886, Dudelange"},
    {front: "Own dynasty (1890)?", back: "Adolphe of Nassau — William III died without male heir, end of union with Netherlands"},
    {front: "ARBED created?", back: "1911"},
    {front: "WWI?", back: "1914-18: Germany invades; Grand Duchess Marie-Adelaide"},
    {front: "1919 referendum?", back: "78% voted for monarchy; Charlotte replaces Marie-Adelaide; universal suffrage introduced"},
    {front: "BLEU/UEBL?", back: "1921 — Belgium-Luxembourg Economic Union"},
    {front: "1929 holding companies law?", back: "Seeds of financial sector"},
    {front: "1937 referendum?", back: "50.7% voted AGAINST prohibiting Communist Party ('Muzzle Law' failed)"},
    {front: "WWII invasion?", back: "10 May 1940 — Nazi Germany"},
    {front: "WWII exile?", back: "Grand Duchess Charlotte + government went into exile"},
    {front: "Forced conscription in WWII?", back: "~11,000 young men forcibly conscripted by Nazis"},
    {front: "WWII liberation?", back: "9 Sept 1944 (Americans); Battle of Bulge 16 Dec 1944; fully 22 Feb 1945"},
    {front: "WWII deaths?", back: "2% of total population lost their lives"},
    {front: "Neutrality renounced?", back: "1948; joined NATO 1949"},
    {front: "Marshall Plan?", back: "1948 — US economic aid for post-war reconstruction"},
    {front: "UN membership?", back: "1945 — founding member"},
    {front: "NATO membership?", back: "1949 — founding member"},
    {front: "Council of Europe?", back: "1949 — founding member"},
    {front: "ECSC?", back: "1951 — European Coal and Steel Community, Luxembourg founding member + HQ"},
    {front: "Treaty of Rome (1957)?", back: "Created EEC — Luxembourg founding member"},
    {front: "Steel crisis?", back: "Began 1974; last mine 1981; last blast furnace 1997"},
    {front: "Schengen Agreement?", back: "Signed 1985 (Luxembourg village); force 1995"},
    {front: "Maastricht Treaty?", back: "1992 — created the European Union"},
    {front: "Treaty of Lisbon?", back: "2007 (force 2009) — current EU framework"},
    {front: "Euro introduction?", back: "1999 electronic; 2002 banknotes/coins"},
    {front: "University of Luxembourg?", back: "Founded 2003"},
    {front: "Dual citizenship?", back: "Permitted since 2008"},
    {front: "2015 referendum?", back: "Voting rights for foreign residents rejected (~80% against)"},
    {front: "Same-sex marriage?", back: "2014 — Parliament voted in favour"},
    {front: "National Day?", back: "23 June (decree of 23 Dec 1961)"},
    {front: "National anthem?", back: "Ons Heemecht (1859) — Michel Lentz (lyrics) / Jean-Antoine Zinnen (music)"},
    {front: "Ons Heemecht first performed?", back: "Ettelbruck, 1864"},
    {front: "Flag colours (top to bottom)?", back: "Red, white, sky blue (differs from Netherlands by using sky blue)"},
    {front: "Coat of arms?", back: "Red lion on blue/white stripes — established ~1235 by Count Henry V"},
    {front: "Three official languages?", back: "Luxembourgish (national), French (legislation), German (administrative)"},
    {front: "Language law?", back: "24 February 1984 — Letzebuergesch = national language"},
    {front: "Legislation language?", back: "French exclusively"},
    {front: "Area of Luxembourg?", back: "2,586 km²"},
    {front: "Highest point?", back: "560m at Wilwerdange (Oesling)"},
    {front: "Two natural regions?", back: "Oesling (north, 32%, Ardennes) and Gutland (south, 68%)"},
    {front: "Neighbouring countries?", back: "Belgium (west), Germany (east), France (south)"},
    {front: "Capital population?", back: "Luxembourg City — ~107,200 inhabitants"},
    {front: "Second largest city?", back: "Esch-sur-Alzette (~32,600)"},
    {front: "Minett region?", back: "Former iron ore mining area in south (Esch, Differdange, Dudelange)"},
    {front: "Foreign residents percentage?", back: "~47% (2021) — 160+ nationalities"},
    {front: "Largest foreign community?", back: "Portuguese (~36% of foreigners, ~15% of total population)"},
    {front: "Cross-border commuters?", back: "200,000+ (2019); ~46% of workforce"},
    {front: "Residence for naturalisation?", back: "7 consecutive years"},
    {front: "Luxembourg EC Presidents?", back: "Thorn (1981-85), Santer (1995-99), Juncker (2014-19)"},
    {front: "EU institutions in Luxembourg?", back: "CJEU, Court of Auditors, EIB, Eurostat, Gen. Secretariat of EP, Publications Office"},
    {front: "Kirchberg quarter?", back: "Houses EU institutions (developed from 1963)"},
    {front: "SES?", back: "World's leading satellite operator (50+ satellites, orbital positions 1988)"},
    {front: "RTL Group?", back: "Leading European TV/radio broadcaster (radio 1929, TV 1955)"},
    {front: "Luxembourg investment fund ranking?", back: "2nd largest in world (after US)"},
    {front: "Goodyear in Luxembourg?", back: "1949 — first major US company"},
    {front: "Steel company evolution?", back: "ARBED (1911) → Arcelor (2002) → ArcelorMittal (2006)"},
    {front: "European Capital of Culture?", back: "1995 and 2007 — only city awarded twice"},
    {front: "Benelux?", back: "Economic union: Belgium + Netherlands + Luxembourg (wartime alliance 1944)"},
    {front: "European Space Agency?", back: "Luxembourg joined 2005"},
    {front: "2005 EU Constitution referendum?", back: "56% for, 44% against"},
];

// ===== TIMELINE =====
const timeline = [
    {year: "963", event: "Count Siegfried acquires Lucilinburhuc (the Bock)"},
    {year: "1308", event: "Henry VII elected King/Emperor of Holy Roman Empire"},
    {year: "1354", event: "County elevated to Duchy by Charles IV"},
    {year: "1443", event: "Philip the Good (Burgundy) conquers Luxembourg"},
    {year: "1795", event: "French Republic conquers and abolishes Duchy"},
    {year: "1815", event: "Congress of Vienna creates the Grand Duchy"},
    {year: "1839", event: "Treaty of London - independence (19 April)"},
    {year: "1842", event: "Joins German Customs Union (Zollverein)"},
    {year: "1848", event: "First liberal Constitution"},
    {year: "1867", event: "Treaty of London - neutrality, fortress dismantled"},
    {year: "1868", event: "Current Constitution adopted"},
    {year: "1879", event: "Thomas process licence (Emile Metz) - steel boom"},
    {year: "1890", event: "Own dynasty: Adolphe of Nassau becomes Grand Duke"},
    {year: "1914", event: "WWI: Germany invades, violating neutrality"},
    {year: "1919", event: "Universal suffrage; 78% vote for monarchy"},
    {year: "1921", event: "Belgium-Luxembourg Economic Union (BLEU)"},
    {year: "1929", event: "Law on holding companies (financial sector seeds)"},
    {year: "1937", event: "Referendum rejects Communist Party prohibition"},
    {year: "1940", event: "10 May: Nazi Germany invades"},
    {year: "1944", event: "9 Sept: Liberation begins; 16 Dec: Battle of the Bulge"},
    {year: "1945", event: "22 Feb: Full liberation; UN founding member"},
    {year: "1948", event: "Neutrality renounced; Marshall Plan"},
    {year: "1949", event: "NATO and Council of Europe founding member"},
    {year: "1951", event: "ECSC founded - Luxembourg = HQ"},
    {year: "1957", event: "Treaties of Rome (EEC) - founding member"},
    {year: "1974", event: "Steel crisis begins"},
    {year: "1984", event: "Language law: Letzebuergesch = national language"},
    {year: "1985", event: "Schengen Agreement signed"},
    {year: "1992", event: "Maastricht Treaty - EU created"},
    {year: "1999", event: "Euro introduced (electronic)"},
    {year: "2000", event: "Grand Duke Henri accedes to throne (7 Oct)"},
    {year: "2003", event: "University of Luxembourg founded"},
    {year: "2008", event: "Dual citizenship permitted"},
];
