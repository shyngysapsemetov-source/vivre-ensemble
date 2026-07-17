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

// ==========================================================================
// NARRATIVE LAYER (v2) — three lenses over the same underlying content.
//   • chapters  → chronological Story view
//   • figures   → biographical cards referenced from chapters
//   • scenarios → case-based Scenario view
//   • journey   → 4-part personal framing for the Home / intro
// All narrative items reference existing studyContent, timeline, and questions
// by key so a single fact never lives in two places.
// ==========================================================================

const figures = {
    siegfried: {
        name: "Count Siegfried",
        years: "c. 922 – 998",
        role: "Founder of Luxembourg",
        summary: "In 963 he swapped land with the Abbey of St Maximin to acquire a small Roman-era fortification on the Bock promontory. He called it Lucilinburhuc — 'small castle' — and from that rock the Duchy would grow.",
        matters: "Every Luxembourger dates the country from Siegfried's deed of exchange. 963 is Luxembourg's year zero."
    },
    henry_vii: {
        name: "Henry VII",
        years: "c. 1275 – 1313",
        role: "Count of Luxembourg, Holy Roman Emperor",
        summary: "In 1308 the German electors chose Count Henry of Luxembourg as their king. Four years later he was crowned Emperor in Rome — the first of four Luxembourg emperors.",
        matters: "For a century the small castle on the Bock produced European emperors. This is why Charles IV, an emperor, was able to raise the county to a Duchy in 1354."
    },
    john_the_blind: {
        name: "John the Blind",
        years: "1296 – 1346",
        role: "King of Bohemia, Count of Luxembourg",
        summary: "Henry VII's son. Went blind late in life yet insisted on charging into the Battle of Crécy (1346), where he was killed. Buried in Luxembourg City.",
        matters: "Luxembourg's most famous medieval figure. His tomb is still in Notre-Dame Cathedral."
    },
    marie_adelaide: {
        name: "Grand Duchess Marie-Adélaïde",
        years: "1894 – 1924",
        role: "Grand Duchess 1912–1919",
        summary: "Reigned when Germany invaded in 1914. Her decision to meet Emperor Wilhelm II was later called collaboration. When revolution threatened the monarchy after WWI, she abdicated in favour of her sister.",
        matters: "The 1919 crisis nearly ended the monarchy. A referendum kept it (78% for). Marie-Adélaïde is the reason the House of Nassau still reigns today."
    },
    charlotte: {
        name: "Grand Duchess Charlotte",
        years: "1896 – 1985",
        role: "Grand Duchess 1919–1964",
        summary: "Took the throne from her sister at 23. Led the country in exile during WWII, broadcasting to occupied Luxembourg on BBC radio. Returned in 1945 to a hero's welcome.",
        matters: "Charlotte is the national symbol of resistance. Ask an older Luxembourger who they mean by 'the Grand Duchess' and this is who they mean."
    },
    henri: {
        name: "Grand Duke Henri",
        years: "1955 – present",
        role: "Grand Duke since 2000",
        summary: "Son of Grand Duke Jean. Acceded to the throne on 7 October 2000. Married to María Teresa Mestre (Cuban-born). Announced in 2024 that Prince Guillaume will take over.",
        matters: "The Grand Duke you'll sing the anthem for. Inviolable — cannot be prosecuted — but every act must be countersigned by a minister."
    },
    juncker: {
        name: "Jean-Claude Juncker",
        years: "1954 – present",
        role: "PM 1995–2013, EC President 2014–2019",
        summary: "Longest-serving Luxembourg PM. The third Luxembourger to lead the European Commission, after Gaston Thorn (1981–85) and Jacques Santer (1995–99).",
        matters: "Three EC presidents from a country of ~640,000. This is Luxembourg's outsize European weight in one statistic."
    },
    siegfried_castle_dance: {
        name: "Melusina",
        years: "legendary",
        role: "The mermaid of the Alzette",
        summary: "Legend says Siegfried married a mysterious woman on condition he never watch her bathe on Saturdays. When he did, he saw she was half fish. She dove into the Alzette and Luxembourg was left with a fortress but no queen.",
        matters: "Cultural detail. Every Luxembourg schoolchild learns this. It's the story behind Siegfried's founding of the castle."
    },
    charles_iv: {
        name: "Charles IV",
        years: "1316 – 1378",
        role: "Holy Roman Emperor, King of Bohemia",
        summary: "Grandson of Henry VII, son of John the Blind. As Emperor in 1354 he raised his family's homeland from a County to a Duchy — one of his last acts for Luxembourg before focusing his reign on Prague, which he made his imperial capital.",
        matters: "The reason Luxembourg is called a Duchy and not a County. His signature elevated the territory's rank in the medieval European hierarchy."
    },
    william_i: {
        name: "William I of Orange-Nassau",
        years: "1772 – 1843",
        role: "King of the Netherlands, first Grand Duke",
        summary: "The Congress of Vienna gave him the Netherlands in 1815 and threw in Luxembourg as a personal possession. He treated it as a Dutch province, not a Duchy. When the Belgians revolted in 1830, most of Luxembourg tried to join them — the 1839 Treaty of London ended that by splitting the country in half.",
        matters: "Explains why Luxembourg's 'personal union with the Netherlands' lasted 75 years despite being independent on paper from 1839."
    },
    adolphe: {
        name: "Adolphe of Nassau",
        years: "1817 – 1905",
        role: "First Grand Duke of the national dynasty (1890–1905)",
        summary: "When Dutch King William III died in 1890 without a male heir, Luxembourg's crown couldn't pass to his daughter (the Nassau family compact forbade female succession at the time). It jumped to a distant cousin — Adolphe — who became the first Grand Duke to actually live in Luxembourg.",
        matters: "1890 = the year Luxembourg stopped sharing its monarch with the Netherlands. The current royal family descends from Adolphe."
    },
    dicks_lentz: {
        name: "Michel Lentz",
        years: "1820 – 1893",
        role: "Poet, author of 'Ons Heemecht'",
        summary: "Bank clerk turned Luxembourgish-language poet. Wrote the national anthem 'Ons Heemecht' (Our Homeland) in 1859. Also wrote 'De Feierwon' — an unofficial second anthem about Luxembourg's first railway line.",
        matters: "One of the reasons Luxembourgish exists as a written language. His generation (with 'Dicks' Edmond de la Fontaine) invented modern Luxembourgish literature."
    },
    schuman: {
        name: "Robert Schuman",
        years: "1886 – 1963",
        role: "French statesman, born in Luxembourg",
        summary: "Born in Clausen (Luxembourg City) to a Luxembourg-born father who acquired French citizenship. Became French Foreign Minister and delivered the 9 May 1950 declaration that proposed pooling French and German coal and steel — the seed of the European Union.",
        matters: "'Europe Day' (9 May) commemorates his declaration. Luxembourg is proud to claim him even though he served France."
    },
    grand_duke_jean: {
        name: "Grand Duke Jean",
        years: "1921 – 2019",
        role: "Grand Duke 1964 – 2000",
        summary: "Charlotte's son. Fought as a volunteer with the Irish Guards during WWII and landed in Normandy in 1944. Reigned for 36 years, then abdicated in favour of his son Henri in October 2000.",
        matters: "Bridge between wartime and modern Luxembourg. Under Jean, the country transitioned from a steel economy to a financial centre."
    }
};

const chapters = [
    {
        id: "ch1",
        number: 1,
        title: "Birth of a Fortress",
        era: "963 – 1443",
        subtitle: "How a rock in the woods became a European power",
        hook: `<h4 class="hook-h">The swap of 963</h4>
<p>In <strong>963</strong> a count named <strong>Siegfried</strong> traded some land with the Abbey of St Maximin in Trier. What he got in return was a hilltop ruin above the Alzette river — a small Roman-era fortification the monks called <em>Lucilinburhuc</em>, "little castle". To the abbey it was worthless. To Siegfried it was the start of a country.</p>
<h4 class="hook-h">From a tower to an empire</h4>
<p>Siegfried's descendants kept expanding. In <strong>1308</strong> one of them, <strong>Henry VII</strong>, was elected King of the Romans and crowned Holy Roman Emperor in 1312. Over the next 130 years, the House of Luxembourg put <strong>four emperors</strong> on the throne of the Holy Roman Empire — an astonishing run for a family from a small castle on a rock.</p>
<h4 class="hook-h">From County to Duchy</h4>
<p>In <strong>1354</strong>, Emperor Charles IV (himself a Luxembourger) promoted the County of Luxembourg to a full <strong>Duchy</strong>. The name <em>Lucilinburhuc</em> had by then softened in local speech to <em>Lëtzebuerg</em> — Luxembourg.</p>
<h4 class="hook-h">And then they lost it</h4>
<p>In <strong>1443</strong>, Philip the Good, Duke of Burgundy, conquered Luxembourg. The dynasty was gone. What followed was 372 years of foreign rule — the story of the next chapter.</p>`,
        arc: [
            "Siegfried's exchange (963) — the Duchy's zero point",
            "The medieval Counts (963 – 1308) — expansion from a single tower",
            "Four emperors from the House of Luxembourg (1308 – 1437)",
            "John the Blind dies at Crécy (1346) — Luxembourg's most legendary king",
            "Charles IV elevates the County to a Duchy (1354)",
            "Wenceslas I — first titular Duke",
            "Burgundy conquers Luxembourg (1443) — end of self-rule"
        ],
        studySections: [
            { module: "module3", index: 0 }
        ],
        timelineYears: ["963", "1308", "1354", "1443"],
        figures: ["siegfried", "henry_vii", "john_the_blind", "charles_iv", "siegfried_castle_dance"],
        rightsUnlocked: [],
        institutionsUnlocked: ["The count / duke as personal ruler"],
        keyQuestion: "Why is 963 the founding date?",
        keyQuestionAnswer: "Because that's the year the deed of exchange gave Siegfried the fortification he called Lucilinburhuc — the name that eventually became Luxembourg. There was no formal 'founding'; historians treat the deed as the earliest documented moment when 'Luxembourg' existed as a place with a lord.",
        culturalNote: {
            title: "The legend of Melusina",
            text: "Local legend says Siegfried married a mysterious woman on the condition he would never watch her bathe on Saturdays. Curiosity won. When he peeked, he saw she was half fish. She dove into the Alzette river and was never seen again. The story is a Luxembourgish variant of a widespread European folk motif — but every child in the country grows up with it, and Melusina is the unofficial patron of Luxembourg City. You'll see her statue on the riverbank below the Bock."
        },
        mustKnow: [
            "963 — Siegfried acquires Lucilinburhuc from the Abbey of St Maximin of Trier (the founding date)",
            "The castle sat on the Bock promontory above the Alzette river",
            "Lucilinburhuc means 'small castle' — the origin of the name Luxembourg (Lëtzebuerg)",
            "1308 — Count Henry VII elected King of the Romans; crowned Holy Roman Emperor in 1312",
            "John the Blind — son of Henry VII, King of Bohemia, died at the Battle of Crécy in 1346",
            "1354 — Emperor Charles IV elevated Luxembourg from a County to a Duchy",
            "The House of Luxembourg produced 4 Holy Roman Emperors (Henry VII, Charles IV, Wenceslas, Sigismund)",
            "1443 — Philip the Good, Duke of Burgundy, conquered Luxembourg; end of self-rule"
        ],
        modules: [3]
    },
    {
        id: "ch2",
        number: 2,
        title: "Ruled by Foreigners",
        era: "1443 – 1815",
        subtitle: "372 years without sovereignty",
        hook: `<h4 class="hook-h">A chess piece on the map</h4>
<p>For nearly four centuries, no one asked Luxembourgers who should govern them. The Duchy passed from ruler to ruler like a chess piece — the price of sitting between France and the German lands.</p>
<h4 class="hook-h">The four occupiers</h4>
<p>The order matters: <strong>Burgundians</strong> (1443), <strong>Spanish Habsburgs</strong> (from 1556, after Charles V split his empire), <strong>French</strong> (Louis XIV briefly, 1684–1697), then <strong>Austrian Habsburgs</strong> (from 1714, via the Treaty of Utrecht). Sovereignty passed by inheritance, marriage, and conquest — never by choice.</p>
<h4 class="hook-h">Each occupier built up the fortress</h4>
<p>Spanish engineers layered onto Burgundian walls. In <strong>1684</strong>, French architect Vauban added his signature star bastions. The Austrians reinforced it again after 1714. By 1795, Luxembourg City was one of the strongest fortresses in Europe — the "<strong>Gibraltar of the North</strong>": three concentric rings of defence, 24 forts, 23 km of underground casemates.</p>
<h4 class="hook-h">And then the French Revolution</h4>
<p>In <strong>1795</strong>, Revolutionary France annexed Luxembourg outright, dissolved the Duchy, and renamed it the <em>Département des Forêts</em>. For 19 years, Luxembourgers were legally French — until Napoleon fell in 1814 and the Congress of Vienna redrew the map.</p>`,
        arc: [
            "Burgundian rule (1443 – 1477) — Philip the Good's conquest",
            "Habsburg inheritance through marriage (1477) — Mary of Burgundy weds Maximilian",
            "Charles V splits the empire (1556) — Luxembourg goes to Spanish Habsburgs",
            "Treaty of the Pyrenees (1659) — Thionville and southern territory to France",
            "Louis XIV briefly conquers (1684 – 1697) — Vauban rebuilds the fortress",
            "Austrian Habsburgs (1714 – 1795) — via the Treaty of Utrecht",
            "French Republic abolishes the Duchy (1795 – 1814) — 'Département des Forêts'"
        ],
        studySections: [
            { module: "module3", index: 1 }
        ],
        timelineYears: ["1795"],
        figures: [],
        rightsUnlocked: [],
        institutionsUnlocked: [],
        keyQuestion: "Did Luxembourg ever get to choose its ruler in this period?",
        keyQuestionAnswer: "Never. Sovereignty passed through inheritance, marriage, and conquest. The 1795 French annexation dissolved the Duchy entirely — Luxembourg became the 'Département des Forêts' and Luxembourgers officially became French citizens for 19 years, until Napoleon's fall in 1814.",
        culturalNote: {
            title: "The fortress that outgrew the country",
            text: "Successive occupiers made the Luxembourg City fortress so formidable that by the 18th century it had three concentric rings of defences, 24 forts, and 23 km of underground casemates (tunnels) carved into the sandstone. Those tunnels are now a UNESCO World Heritage site (inscribed 1994). When you tour the Bock casemates today, most of what you see is Spanish, French, or Austrian engineering — not Luxembourgish."
        },
        mustKnow: [
            "1443–1477 — Burgundian rule (Philip the Good's conquest)",
            "1477 — Habsburgs inherit via marriage of Mary of Burgundy to Maximilian",
            "1556 — Charles V splits the empire; Luxembourg goes to Spanish Habsburgs",
            "1659 — Treaty of the Pyrenees: southern part (incl. Thionville) ceded to France",
            "1684 — Louis XIV conquers; Vauban rebuilds the fortress",
            "1697 — Returned to Spain",
            "1714 — Passes to Austrian Habsburgs (Treaty of Utrecht)",
            "1795 — French Republic annexes and abolishes the Duchy; renamed Département des Forêts",
            "Luxembourg City fortress = the 'Gibraltar of the North'",
            "Casemates (23 km of tunnels) — UNESCO World Heritage Site since 1994"
        ],
        modules: [3]
    },
    {
        id: "ch3",
        number: 3,
        title: "Becoming a Nation",
        era: "1815 – 1890",
        subtitle: "Independence, constitutions, and a dynasty of one's own",
        hook: `<h4 class="hook-h">The Grand Duchy on paper (1815)</h4>
<p>The Congress of Vienna in <strong>1815</strong> drew Luxembourg back onto the map, but as a "Grand Duchy" — a promotion in rank so its new owner, King <strong>William I of the Netherlands</strong>, could match Prussia and Austria. Luxembourg belonged to the Dutch, sat inside the German Confederation, and hosted a Prussian garrison. Independent in name only.</p>
<h4 class="hook-h">The birthday: 19 April 1839</h4>
<p>The Belgian Revolution of 1830 dragged Luxembourg in. The <strong>Treaty of London on 19 April 1839</strong> settled it: Belgium took the western two-thirds (including the French-speaking half). What remained became a genuinely independent Grand Duchy — smaller, but sovereign for the first time in 372 years. This date is Luxembourg's official birthday.</p>
<h4 class="hook-h">Constitutions and the fortress crisis</h4>
<p>Freedom brought constitutions: a first charter in <strong>1841</strong>, a liberal Constitution in <strong>1848</strong>, and the current one in <strong>1868</strong> (heavily amended since). Then in <strong>1867</strong> France's Napoleon III tried to buy Luxembourg from the Dutch king. Prussia refused. Europe nearly went to war. The Second Treaty of London (1867) forced Luxembourg to become <strong>permanently neutral</strong>, and its famous fortress was dismantled stone by stone.</p>
<h4 class="hook-h">Its own dynasty (1890)</h4>
<p>In 1890, Dutch King-Grand Duke William III died without a male heir. Dutch law and Luxembourg's own law of succession diverged — so a distant Nassau cousin, <strong>Adolphe</strong>, was called in. Luxembourg finally had its own royal family. And thanks to the <strong>Thomas process</strong> (1879), which let engineers extract phosphorus from Luxembourg's iron ore, the steel industry was about to make the country rich.</p>`,
        arc: [
            "Congress of Vienna creates the Grand Duchy (1815) — under Dutch personal union",
            "Belgian Revolution (1830) — most of Luxembourg tries to join Belgium",
            "Treaty of London — official birthday (19 April 1839)",
            "First constitutional charter (1841) — granted, not agreed",
            "First liberal Constitution (1848) — modelled on Belgium's",
            "Zollverein membership (1842) — economic integration with Germany",
            "The Luxembourg Crisis and permanent neutrality (1867)",
            "Current Constitution adopted (1868) — still in force",
            "Steel industry begins (1879) — Emile Metz and the Thomas process",
            "Adolphe of Nassau starts the national dynasty (1890)"
        ],
        studySections: [
            { module: "module3", index: 2 },
            { module: "module2", index: 0 }
        ],
        timelineYears: ["1815", "1839", "1842", "1848", "1867", "1868", "1879", "1890"],
        figures: ["william_i", "adolphe", "dicks_lentz"],
        rightsUnlocked: [
            "First-generation civil & political rights (1848 constitution)",
            "Freedom of press and assembly (1848)"
        ],
        institutionsUnlocked: [
            "Grand Duke as head of state",
            "Chamber of Deputies (parliament)",
            "Council of State",
            "Current 1868 Constitution"
        ],
        keyQuestion: "Why is 19 April 1839 the 'birthday'?",
        keyQuestionAnswer: "Because the Treaty of London on that date recognised the Grand Duchy as an independent state — smaller than before (Belgium took two-thirds of the territory, including the French-speaking western half), but sovereign for the first time in 372 years. The remaining territory is roughly today's Luxembourg.",
        culturalNote: {
            title: "Ons Heemecht — the anthem born in a coffee house",
            text: "In 1859 Michel Lentz, a Luxembourg City bank clerk, wrote the poem 'Ons Heemecht' ('Our Homeland') at a table in a café. Composer Jean-Antoine Zinnen set it to music. It was first performed publicly in 1864 in Ettelbruck, at a music festival meant to celebrate Luxembourgish identity. The song became so beloved that the constitution now recognises it as the national anthem — but only the first and fourth stanzas are sung on official occasions. On National Day (23 June), you'll hear both. The rest is worth reading for the imagery: rivers, oak trees, and vineyards."
        },
        mustKnow: [
            "1815 — Congress of Vienna creates the Grand Duchy under Dutch personal union (William I)",
            "1830 — Belgian Revolution",
            "19 April 1839 — Treaty of London: Luxembourg's official independence day",
            "Belgium took the western 2/3; the remaining eastern 1/3 = today's Luxembourg",
            "1841 — First constitutional charter (granted by the king)",
            "1842 — Joins the German Zollverein (customs union)",
            "1848 — First liberal Constitution (modelled on Belgium's)",
            "1859 — First railway; 'Ons Heemecht' poem written (Michel Lentz)",
            "1867 — Second Treaty of London: permanent neutrality; fortress dismantled; leaves German Confederation",
            "1868 — Fourth Constitution adopted (still in force, heavily amended)",
            "1879 — Emile Metz buys Thomas process licence; Luxembourg steel takes off",
            "1886 — First integrated steelworks in Dudelange",
            "1890 — William III dies without a male heir; Adolphe of Nassau starts the national dynasty",
            "Anthem 'Ons Heemecht': lyrics by Michel Lentz, music by Jean-Antoine Zinnen"
        ],
        modules: [3, 1, 2]
    },
    {
        id: "ch4",
        number: 4,
        title: "Two Wars, Two Invasions",
        era: "1914 – 1945",
        subtitle: "How a neutral country survived being conquered twice in thirty years",
        hook: `<h4 class="hook-h">Neutrality that didn't hold</h4>
<p>Since <strong>1867</strong>, Luxembourg had been guaranteed permanently neutral by treaty. It was supposed to keep the country out of European wars. Instead, Luxembourg was invaded on the <em>first day</em> of both world wars — <strong>2 August 1914</strong> and <strong>10 May 1940</strong>.</p>
<h4 class="hook-h">WWI and the abdication (1914–1919)</h4>
<p>In 1914, German armies rolled through on the way to France. The young Grand Duchess <strong>Marie-Adélaïde</strong> received Kaiser Wilhelm II at her palace — an act read as collaboration. After the war, revolutionary movements briefly pushed for a republic. She abdicated in January 1919. Her sister <strong>Charlotte</strong> took the throne. A <strong>referendum on 28 September 1919</strong> asked the country directly: <strong>78%</strong> voted to keep the monarchy. On the same ballot, <strong>80%</strong> chose an economic union with Belgium over France — the seed of the BLEU (1921). The same year, Luxembourg introduced <strong>universal suffrage</strong> — men and women.</p>
<h4 class="hook-h">WWII and forced conscription (1940–1945)</h4>
<p>In May 1940 the Germans came again — this time to stay. Grand Duchess Charlotte and her government fled to London, and Charlotte broadcast to occupied Luxembourg on the BBC throughout the war. Under Gauleiter Gustav Simon, Germanisation began. On <strong>30 August 1942</strong>, forced conscription was decreed. The next day, workers launched Western Europe's only <strong>general strike</strong> against Nazi occupation. 21 strikers were shot in reprisal. Around <strong>11,000</strong> young men were drafted into the Wehrmacht; roughly 2,800 died. Around <strong>800 Jews</strong> from Luxembourg were deported and murdered.</p>
<h4 class="hook-h">Liberation and the end of neutrality</h4>
<p>American forces liberated Luxembourg on <strong>9 September 1944</strong>. The German counter-offensive of the <strong>Battle of the Bulge</strong> (16 December 1944) pushed back briefly; full liberation came <strong>22 February 1945</strong>. Luxembourg had lost <strong>2% of its population</strong>. In 1948, it formally renounced neutrality — and never went back.</p>`,
        arc: [
            "Germany violates neutrality (2 August 1914) — the Schlieffen Plan through Luxembourg",
            "Marie-Adélaïde meets the Kaiser — the collaboration accusation",
            "Grand Duchess Marie-Adélaïde abdicates (January 1919)",
            "Charlotte succeeds her sister; a republic movement briefly threatens the monarchy",
            "September 1919 referendum: 78% keep the monarchy, 80% keep the customs union with Belgium",
            "Universal suffrage introduced (1919) — women vote for the first time",
            "Belgium-Luxembourg Economic Union (BLEU, 1921) — replacing the German Zollverein",
            "1937 'Muzzle Law' referendum: 50.7% reject banning the Communist Party",
            "Nazi invasion (10 May 1940)",
            "Charlotte and government in exile in London, then Montreal; radio broadcasts to the resistance",
            "Forced conscription: ~11,000 young men drafted into the Wehrmacht",
            "General strike (August 1942) against Germanisation policies",
            "Liberation (9 September 1944) & Battle of the Bulge (December 1944)",
            "Full liberation (22 February 1945)"
        ],
        studySections: [
            { module: "module3", index: 4 },
            { module: "module3", index: 5 },
            { module: "module3", index: 6 }
        ],
        timelineYears: ["1914", "1919", "1921", "1929", "1937", "1940", "1944", "1945"],
        figures: ["marie_adelaide", "charlotte"],
        rightsUnlocked: [
            "Universal suffrage (1919) — men and women, no property qualification",
            "Compulsory voting (1919)"
        ],
        institutionsUnlocked: [
            "Government-in-exile as a model of legitimate authority under occupation"
        ],
        keyQuestion: "Why did the monarchy survive 1919?",
        keyQuestionAnswer: "A referendum. After Marie-Adélaïde was blamed for the 1914 invasion, revolutionary movements briefly pushed for a republic. When the country was asked directly on 28 September 1919, 78% voted to keep the monarchy — with her sister Charlotte on the throne. A separate question on the same ballot rejected a customs union with France by 73%; voters chose Belgium instead, which became the BLEU in 1921.",
        culturalNote: {
            title: "The general strike of 1942",
            text: "On 31 August 1942, in response to Nazi Germany's decree conscripting young Luxembourgers into the Wehrmacht, workers and students launched a spontaneous general strike — the only one in occupied Western Europe. Nazi reprisals were severe: 21 strikers were shot, hundreds deported. The strike is commemorated every year and is a foundational memory of the Luxembourgish resistance. If you visit the National Museum of the Resistance in Esch-sur-Alzette, this is the story it centres."
        },
        mustKnow: [
            "2 August 1914 — Germany invades, violating Luxembourg's neutrality",
            "Grand Duchess Marie-Adélaïde met the Kaiser; accused of collaboration; abdicated January 1919",
            "Charlotte succeeds her sister; reigns 1919–1964",
            "28 September 1919 — Referendum: 78% keep the monarchy, 80% choose economic union with Belgium",
            "1919 — Universal suffrage (men AND women vote for the first time); compulsory voting introduced",
            "1921 — BLEU (Belgium-Luxembourg Economic Union) replaces the German Zollverein",
            "1929 — Law on holding companies (foundation of the financial sector)",
            "1937 — 'Muzzle Law' referendum: 50.7% reject banning the Communist Party",
            "10 May 1940 — Nazi Germany invades",
            "Charlotte and government flee to London (then Montreal); Charlotte broadcasts on the BBC",
            "Gauleiter Gustav Simon runs the German civil administration; policy of Germanisation",
            "30 August 1942 — Forced conscription decreed",
            "31 August 1942 — General strike (Western Europe's only one under Nazi rule); 21 strikers shot",
            "~11,000 Luxembourgers forcibly conscripted into the Wehrmacht; ~2,800 died",
            "~800 Jews from Luxembourg deported and murdered",
            "9 September 1944 — American forces liberate Luxembourg",
            "16 December 1944 — Battle of the Bulge (German counter-offensive)",
            "22 February 1945 — Full liberation",
            "2% of the total population lost their lives during WWII"
        ],
        modules: [3]
    },
    {
        id: "ch5",
        number: 5,
        title: "Building Europe",
        era: "1945 – 2000",
        subtitle: "From steel to Schengen: how a small country founded a continent",
        hook: `<h4 class="hook-h">Two decisions in 1945</h4>
<p>Luxembourg emerged from the war with two clear conclusions. First: neutrality had failed twice; it had to go. Second: a country of half a million people between France and Germany could only be safe <em>inside</em> a bigger structure. Everything that followed was a consequence.</p>
<h4 class="hook-h">Founding modern Europe</h4>
<p>Luxembourg joined at the founding — every time. <strong>UN</strong> (1945). <strong>NATO</strong> and <strong>Council of Europe</strong> (1949). The <strong>ECSC</strong> in 1951 (with Luxembourg City as headquarters). The <strong>EEC</strong> via the Treaties of Rome (1957). The <strong>Schengen Agreement</strong> — signed on a Luxembourg riverboat in <strong>1985</strong>, in force from <strong>1995</strong>. And the <strong>euro</strong> — electronic in 1999, cash in 2002.</p>
<h4 class="hook-h">The steel-to-finance pivot</h4>
<p>Steel had made the country rich. In 1970 it was <strong>~30% of GDP</strong> and <strong>~17% of the workforce</strong>. The <strong>1974 steel crisis</strong> shattered it — 25,000 jobs disappeared over two decades. The 1929 holding-company law had already planted the seed of a financial sector. By 2000, Luxembourg was the <strong>world's second-largest investment fund centre</strong> after the United States. The last blast furnace closed in <strong>1997</strong>.</p>
<h4 class="hook-h">Three Luxembourgers at the top of Europe</h4>
<p><strong>Gaston Thorn</strong> (1981–1985), <strong>Jacques Santer</strong> (1995–1999), and later <strong>Jean-Claude Juncker</strong> (2014–2019) all served as Presidents of the European Commission. Between them, they ran the EU executive for 14 years. In <strong>1984</strong>, Luxembourg made <strong>Luxembourgish</strong> the national language — a self-confident act by a country that no longer felt small.</p>`,
        arc: [
            "UN founding member (1945)",
            "Neutrality renounced (1948) — Marshall Plan aid follows",
            "NATO and Council of Europe founding member (1949)",
            "European Coal and Steel Community founded, Luxembourg = HQ (1951)",
            "Treaties of Rome create the EEC (1957) — Luxembourg founding member",
            "1970s peak steel production: ~30% of GDP, ~17% of workforce",
            "Steel crisis begins (1974) — jobs shed for two decades",
            "Language law (1984) — Luxembourgish becomes the national language",
            "Schengen Agreement signed in Schengen village (1985) — force 1995",
            "Gaston Thorn (1981-85), then Jacques Santer (1995-99), lead the European Commission",
            "Maastricht Treaty creates the EU (1992)",
            "ARBED steel giant survives via merger — becomes Arcelor (2002), then ArcelorMittal (2006)",
            "Last blast furnace closed (1997)",
            "Euro adopted (1999 electronic, 2002 cash)"
        ],
        studySections: [
            { module: "module3", index: 7 },
            { module: "module3", index: 8 }
        ],
        timelineYears: ["1948", "1949", "1951", "1957", "1974", "1984", "1985", "1992", "1999"],
        figures: ["schuman", "grand_duke_jean", "juncker"],
        rightsUnlocked: [
            "Free movement of workers within the EEC (from 1968)",
            "Freedom to work in any Schengen state without border checks (from 1995)"
        ],
        institutionsUnlocked: [
            "EU institutions in Kirchberg (CJEU, EIB, Eurostat, Court of Auditors, Publications Office...)",
            "Luxembourgish as the national language"
        ],
        keyQuestion: "Why does Luxembourg host so many EU bodies?",
        keyQuestionAnswer: "Because it founded them. Being at the table in 1951 (ECSC) and 1957 (EEC) meant that when institutions were placed geographically, Luxembourg got its share alongside Brussels and Strasbourg — and it never let them go. Today Kirchberg (a plateau on the northeast edge of the city) is essentially an EU district: Court of Justice, European Investment Bank, Court of Auditors, Eurostat, General Secretariat of the European Parliament, and the Publications Office all sit there.",
        culturalNote: {
            title: "Schengen: the village that named a treaty",
            text: "The 1985 Schengen Agreement — the treaty that eventually abolished passport checks across most of continental Europe — was signed on the MS Princesse Marie-Astrid, a boat moored on the Moselle river next to the tiny wine-growing village of Schengen (population ~500). The venue mattered: the boat was in international water where France, Germany, and Luxembourg meet. Today Schengen has a small European Museum where you can see the signing table. The village name is now a metonym for open borders in about 26 languages."
        },
        mustKnow: [
            "1945 — UN founding member",
            "1948 — Neutrality officially renounced; Marshall Plan; OEEC membership",
            "1949 — NATO founding member; Council of Europe founding member",
            "1951 — ECSC (European Coal and Steel Community) founding member; Treaty of Paris",
            "1952 — Luxembourg City chosen as ECSC seat (the seed of the EU quarter on Kirchberg)",
            "1957 — Treaties of Rome: founding member of EEC and Euratom",
            "1970s peak steel: ~30% of GDP, ~17% of workforce, 25,000 jobs",
            "1974 — Steel crisis begins",
            "1981 — Last coal/iron mine closed",
            "1984 — Language law: Luxembourgish becomes the national language",
            "1985 — Schengen Agreement signed on the MS Princesse Marie-Astrid; in force 1995",
            "1992 — Maastricht Treaty creates the EU",
            "1997 — Last blast furnace closed",
            "1999 — Euro introduced electronically; 2002 — banknotes and coins",
            "EU institutions in Luxembourg (Kirchberg): CJEU, General Court, Court of Auditors, EIB, Eurostat, Publications Office, EPPO, General Secretariat of the European Parliament",
            "Three Luxembourgish EU Commission Presidents: Gaston Thorn (1981-85), Jacques Santer (1995-99), Jean-Claude Juncker (2014-19)",
            "ARBED steel giant → Arcelor (2002) → ArcelorMittal (2006)"
        ],
        modules: [3, 2]
    },
    {
        id: "ch6",
        number: 6,
        title: "Modern Luxembourg",
        era: "2000 – today",
        subtitle: "A country of many nationalities, three languages, and outsize influence",
        hook: `<h4 class="hook-h">A country half foreign</h4>
<p>Today <strong>~47%</strong> of Luxembourg's residents are foreign nationals — from more than <strong>160 countries</strong>. Every working day, another <strong>~217,000 cross-border commuters</strong> arrive from France (~half), Germany, and Belgium. About 46% of the workforce lives outside Luxembourg. Without them, the economy stops.</p>
<h4 class="hook-h">Three languages, one country</h4>
<p>Three languages are official (since the 1984 law): <strong>Luxembourgish</strong> is the national language, <strong>French</strong> is the language of legislation, and <strong>German</strong> is the administrative and school-literacy language. It's the reason your naturalisation only requires <strong>A2 speaking and B1 listening</strong> in Luxembourgish — not full fluency.</p>
<h4 class="hook-h">The 2023 constitutional revision</h4>
<p>In 2023, Luxembourg overhauled the 1868 Constitution for the first time in over 70 years. Environmental protection became a constitutional objective. Fundamental rights were rewritten. Since <strong>2008</strong>, <strong>dual citizenship</strong> has been permitted — you can keep your current passport when you naturalise (subject to your other country's law). And in <strong>2020</strong>, Luxembourg became the first country in the world with <strong>free public transport</strong> nationwide.</p>
<h4 class="hook-h">Succession in the making</h4>
<p><strong>Grand Duke Henri</strong> has been on the throne since <strong>7 October 2000</strong>. In 2024, he named his son <strong>Prince Guillaume</strong> lieutenant-representant, then in 2025 confirmed him as heir apparent to take over as Grand Duke — Luxembourg's next generation.</p>`,
        arc: [
            "Grand Duke Henri accedes (7 October 2000)",
            "University of Luxembourg founded (2003) — the country finally has its own university",
            "Nationality law reformed (2008) — dual citizenship permitted",
            "Same-sex marriage legalised (2014) — PM Xavier Bettel later marries his partner",
            "2015 referendum: voting rights for foreign residents rejected (~80% against)",
            "Constitutional revision (2023) — first major overhaul of the 1868 Constitution",
            "Free public transport nationwide (2020) — first country in the world",
            "Guillaume named regent (2024) — heir apparent takes over official duties",
            "47% foreign residents today — over 160 nationalities"
        ],
        studySections: [
            { module: "module2", index: 0 },
            { module: "module3", index: 9 }
        ],
        timelineYears: ["2000", "2003", "2008"],
        figures: ["henri"],
        rightsUnlocked: [
            "Dual citizenship (2008)",
            "Same-sex marriage and adoption (2014)",
            "Right to gender identity self-determination (progressive reforms 2018)"
        ],
        institutionsUnlocked: [
            "Modern Luxembourg polity: 47% foreign, 3 official languages, free public transport",
            "Post-2023 constitutional framework"
        ],
        keyQuestion: "Can I keep my current citizenship if I naturalise?",
        keyQuestionAnswer: "Yes — Luxembourg has permitted dual citizenship since 2008. Whether your other country lets you keep its passport is a separate question (their law, not Luxembourg's). Some countries — Germany, historically, and Japan — automatically strip citizenship when their nationals naturalise elsewhere. Check yours.",
        culturalNote: {
            title: "The country that speaks three languages, badly",
            text: "Luxembourg's trilingual system works surprisingly well but produces strange edge cases. Laws are written only in French — even for laws about the Luxembourgish language. Schools teach in German at first, add French later, and use Luxembourgish for oral instruction. Newspapers print in a mix of all three, sometimes on the same page. Cross-border commuters make everything more complicated: a French speaker from Metz, a German from Trier, and a Belgian from Arlon may all be in the same office, using French as the compromise. This is why you're only being tested on A2 Luxembourgish speaking + B1 listening for naturalisation, not full fluency."
        },
        mustKnow: [
            "7 October 2000 — Grand Duke Henri accedes to the throne",
            "2003 — University of Luxembourg founded",
            "2008 — Dual citizenship permitted; new nationality law",
            "December 2008 — Grand Duke Henri refuses to sign euthanasia law; Article 34 amended: he now 'promulgates' laws but no longer 'sanctions' them",
            "2014 — Same-sex marriage legalised (Luxembourg's PM Xavier Bettel later marries his partner)",
            "2015 — Referendum: voting rights for foreign residents rejected (~80% against)",
            "2020 (29 February) — Free public transport nationwide (world first)",
            "2023 — Major constitutional revision (first in 70+ years)",
            "2024 — Prince Guillaume named lieutenant-representant (heir apparent taking over duties)",
            "~47% of residents are foreign nationals (from 160+ countries)",
            "~217,000 cross-border commuters (~46% of the workforce)",
            "3 official languages: Luxembourgish (national), French (legislation), German (administrative)",
            "Naturalisation language requirement: A2 speaking + B1 listening in Luxembourgish"
        ],
        modules: [3, 2]
    }
];

const scenarios = [
    {
        id: "sc_arrest",
        title: "You are detained at 3 a.m.",
        icon: "⚖️",
        module: 1,
        relatedChapters: ["ch3", "ch6"],
        premise: "Police pick you up outside a bar at 3 a.m. You are held in custody. What protects you, and where do those protections come from?",
        beats: [
            {
                q: "What happens next legally?",
                a: "Within 24 hours you must be presented to an investigating judge (juge d'instruction). This is a constitutional guarantee — the state cannot hold you indefinitely."
            },
            {
                q: "What rights kick in immediately?",
                a: "Presumption of innocence. Right to a lawyer. Right to be informed of the accusation in a language you understand. Right to remain silent. These are 'first-generation' civil rights — defendant's rights."
            },
            {
                q: "Where do these rights come from?",
                a: "Three overlapping sources: the Luxembourg Constitution (1868, heavily amended), the European Convention on Human Rights (Council of Europe, 1951 — Articles 5 and 6), and the EU Charter of Fundamental Rights (2000)."
            },
            {
                q: "If Luxembourg violates these rights, where can you go?",
                a: "After exhausting domestic remedies, you can apply to the European Court of Human Rights in Strasbourg. For EU-law questions, national courts can refer to the Court of Justice of the EU in Luxembourg City."
            }
        ],
        links: {
            studySections: [{ module: "module1", index: 0 }, { module: "module1", index: 1 }, { module: "module1", index: 3 }],
            questionsModule: 1
        }
    },
    {
        id: "sc_new_law",
        title: "A minister proposes a new law",
        icon: "📜",
        module: 2,
        relatedChapters: ["ch3", "ch6"],
        premise: "The Minister for Housing wants to cap rent increases. What actually happens between 'idea' and 'law of the land'?",
        beats: [
            {
                q: "Who can initiate the bill?",
                a: "A government minister files a projet de loi. An MP could alternatively file a proposition de loi. Ministers do the vast majority in practice."
            },
            {
                q: "Who reviews it first?",
                a: "The Council of State (21 members, appointed by the Grand Duke). It must give an opinion on all legislation before Parliament votes. Its opinion is advisory — but it holds a suspensive veto."
            },
            {
                q: "How many votes in Parliament?",
                a: "Two. A first vote, then a second at least 3 months later — unless the Council of State grants a dispensation. Chamber of Deputies has 60 MPs elected for 5-year terms."
            },
            {
                q: "How does it become law?",
                a: "The Grand Duke sanctions and promulgates the law. It is then published in the Mémorial (official gazette). Only after publication does it take legal effect."
            },
            {
                q: "Can citizens block it?",
                a: "Not directly. There is no direct public recourse to the Constitutional Court. Only a court hearing a case can refer a constitutional question."
            }
        ],
        links: {
            studySections: [{ module: "module2", index: 8 }, { module: "module2", index: 3 }, { module: "module2", index: 4 }],
            questionsModule: 2
        }
    },
    {
        id: "sc_vote",
        title: "You want to vote",
        icon: "🗳️",
        module: 2,
        relatedChapters: ["ch4", "ch6"],
        premise: "You've lived in Luxembourg for six years. Which elections can you vote in, and when do the rules change?",
        beats: [
            {
                q: "National elections?",
                a: "Only if you are a Luxembourg national, at least 18, and enjoy civic rights. This is the strictest threshold — nationality-based."
            },
            {
                q: "European Parliament?",
                a: "Any EU national who has been domiciled in Luxembourg for 5+ years can vote (Luxembourg elects 6 MEPs). Non-EU nationals cannot vote in European elections."
            },
            {
                q: "Municipal elections?",
                a: "Any foreign national — EU or not — can vote if domiciled 5+ years. This was expanded to be more inclusive at municipal level than national level."
            },
            {
                q: "Is voting compulsory?",
                a: "Yes. For registered voters, voting is COMPULSORY. This is unusual in Europe and is one of the exam's favourite questions."
            },
            {
                q: "So when does the answer change to 'yes, national too'?",
                a: "The day you naturalise. Which is why you are studying for this exam."
            }
        ],
        links: {
            studySections: [{ module: "module2", index: 5 }, { module: "module2", index: 7 }],
            questionsModule: 2
        }
    },
    {
        id: "sc_fortress_1867",
        title: "The 1867 crisis that dismantled a fortress",
        icon: "🏰",
        module: 3,
        relatedChapters: ["ch3"],
        premise: "In 1867 the Prussian king wants to keep his garrison in Luxembourg. Napoleon III of France wants to buy the country from the Dutch king. Neither is going to happen — but the fortress has to go.",
        beats: [
            {
                q: "What was Luxembourg's status before 1867?",
                a: "Independent since 1839 but in personal union with the Netherlands, in the German Confederation, with a Prussian garrison in the fortress on the Bock. A tangle."
            },
            {
                q: "What triggered the crisis?",
                a: "Napoleon III secretly negotiated to buy Luxembourg from William III of the Netherlands. Prussia (Bismarck) refused. Europe faced war over Luxembourg."
            },
            {
                q: "How was it resolved?",
                a: "The Second Treaty of London (1867). Luxembourg would be permanently neutral. The fortress — 'Gibraltar of the North' — would be dismantled stone by stone. The Prussian garrison withdrew. Luxembourg left the German Confederation."
            },
            {
                q: "Why does this still matter?",
                a: "It is the foundation of Luxembourg's small-country diplomacy: neutrality until 1948, then multilateralism. And the fortress ruins are still visible in the city — a UNESCO World Heritage site since 1994."
            }
        ],
        links: {
            studySections: [{ module: "module3", index: 2 }],
            questionsModule: 3
        }
    },
    {
        id: "sc_dual_citizen",
        title: "Should I give up my current passport?",
        icon: "🛂",
        module: 3,
        relatedChapters: ["ch6"],
        premise: "You're about to naturalise. Does Luxembourg force you to renounce your current citizenship?",
        beats: [
            {
                q: "The short answer",
                a: "No. Since 2008, Luxembourg permits dual citizenship. You do not have to renounce your current nationality."
            },
            {
                q: "Was it always so?",
                a: "No. Before 2008 you had to renounce. The 2008 nationality law was part of a broader modernisation of Luxembourgish identity — acknowledging the reality that ~47% of residents are foreign nationals."
            },
            {
                q: "What about your other country?",
                a: "That's a question for your other country's law, not Luxembourg's. Some countries automatically strip citizenship on naturalisation elsewhere — check yours."
            },
            {
                q: "Residency requirement?",
                a: "7 consecutive years of legal residence in Luxembourg — and passing this exam (Vivre Ensemble) plus the language test (Sproochentest, A2 speaking / B1 listening)."
            }
        ],
        links: {
            studySections: [{ module: "module3", index: 9 }],
            questionsModule: 3
        }
    },
    // ================================================================
    // MODULE 1 — RIGHTS (7 additional scenarios)
    // ================================================================
    {
        id: "sc_fired_pregnant",
        title: "Fired while pregnant",
        icon: "🤰",
        module: 1,
        relatedChapters: ["ch5", "ch6"],
        premise: "You tell your employer you're pregnant on a Monday. On Friday, you're 'restructured out'. What protects you?",
        beats: [
            { q: "What kind of right is this?", a: "This sits at the intersection of a second-generation social right (right to work, social security) and a first-generation civil right (protection from discrimination). Luxembourg's Constitution and the EU Charter both protect it." },
            { q: "Where is it explicitly protected?", a: "Article 33 of the EU Charter of Fundamental Rights (2000) — 'legal, economic and social protection of the family'. The EU Pregnant Workers Directive (92/85/EEC). Luxembourg's Labour Code prohibits dismissal from the moment the employer knows about the pregnancy until 12 weeks after giving birth." },
            { q: "Where do you go?", a: "First: the Labour Court (Tribunal du travail). It handles individual employment disputes and can order reinstatement plus damages. If the ruling is wrong on a point of EU law, an appeal can eventually reach the Court of Justice of the EU in Luxembourg City itself." },
            { q: "Does the ECHR help?", a: "Yes — indirectly. Article 8 (private and family life) and Article 14 (non-discrimination) of the European Convention have been used by the Strasbourg court to condemn discriminatory dismissals. Applicable only after you've exhausted domestic remedies." }
        ],
        links: { studySections: [{ module: "module1", index: 1 }, { module: "module1", index: 3 }], questionsModule: 1 }
    },
    {
        id: "sc_press_privacy",
        title: "A newspaper wants to publish your leaked medical records",
        icon: "📰",
        module: 1,
        relatedChapters: ["ch5", "ch6"],
        premise: "A journalist obtained your hospital file from a hacked server. They plan to publish. What weighs against what?",
        beats: [
            { q: "Two rights collide", a: "Freedom of the press (Article 24 of Luxembourg's Constitution; Article 10 ECHR) versus your right to privacy (Article 8 ECHR; Article 7 EU Charter). Both are first-generation civil rights. Neither wins automatically." },
            { q: "How is the balance struck?", a: "Courts weigh public interest against private harm. A politician's health that affects their fitness to serve = public interest. A private citizen's medical records = almost never public interest. The ECHR case law is dense but consistent on this point." },
            { q: "What about GDPR?", a: "Health data is a 'special category' under Article 9 of GDPR — processing is prohibited except in narrow cases. A leaked file being published triggers additional liability for the newspaper and the source." },
            { q: "Can you stop publication?", a: "In Luxembourg, prior restraint is disfavoured. You'd typically sue after the fact for damages, ask for a right of reply, and demand takedown. Emergency injunctions exist but the bar is very high — freedom of the press is jealously guarded." },
            { q: "Where else can you go?", a: "The CNPD (Commission nationale pour la protection des données) — Luxembourg's data protection authority. It can fine the newspaper independently of any court action." }
        ],
        links: { studySections: [{ module: "module1", index: 1 }, { module: "module1", index: 3 }], questionsModule: 1 }
    },
    {
        id: "sc_protest",
        title: "You want to protest at Place Clairefontaine",
        icon: "📣",
        module: 1,
        relatedChapters: ["ch3", "ch4"],
        premise: "You want to demonstrate outside the Prime Minister's building on Place Clairefontaine. Do you need permission? Can the police shut you down?",
        beats: [
            { q: "What right is at stake?", a: "Freedom of assembly — a first-generation civil and political right. Guaranteed by Luxembourg's Constitution, Article 11 of the European Convention on Human Rights, and Article 12 of the EU Charter." },
            { q: "Do you need a permit?", a: "For a spontaneous small gathering on foot, generally no. For a marching demonstration or a static rally with equipment (loudspeakers, stages) in Luxembourg City, you notify the police at least 72 hours in advance. This is a notification, not a request for permission." },
            { q: "Can the police forbid it?", a: "Only for specific reasons: national security, public safety, prevention of disorder, protection of the rights of others. Political inconvenience is NOT a valid reason. Any ban must be proportionate and can be challenged in the Administrative Court." },
            { q: "What can they do during the protest?", a: "Kettle, disperse, or arrest only if there's actual disorder — property damage, incitement to violence. Peaceful protest is protected even if it's disruptive. Recording the police is legal." },
            { q: "If they overreach?", a: "You can sue in Luxembourg's courts, and after exhausting remedies, apply to the European Court of Human Rights in Strasbourg. The ECHR has repeatedly condemned member states for cracking down on peaceful protest." }
        ],
        links: { studySections: [{ module: "module1", index: 1 }, { module: "module1", index: 3 }], questionsModule: 1 }
    },
    {
        id: "sc_trilingual_school",
        title: "Your child speaks 3 languages badly",
        icon: "🏫",
        module: 1,
        relatedChapters: ["ch6"],
        premise: "Your 8-year-old learns to read in German, gets French from year 2, and speaks Luxembourgish in the playground. Is this a right — or an obstacle?",
        beats: [
            { q: "The right", a: "The right to education is a second-generation social right (Luxembourg Constitution and EU Charter Article 14). It guarantees free public education. It does NOT guarantee education in the language of your choice." },
            { q: "The system", a: "Public primary school teaches literacy in German first (grade 1). French is added from grade 2. Luxembourgish is the oral language of instruction and playground life. English arrives in secondary school. This is a deliberate national policy — not something you can opt out of in the public system." },
            { q: "What if my child is falling behind?", a: "Luxembourg has recognised the strain this puts on children who speak neither German nor French at home. State-supported alternatives exist: international schools (Anglophone, Francophone), the European School system, and 'plurilingual' primary schools launched in recent reforms." },
            { q: "Is this discrimination?", a: "No court has ruled it so. The system is uniform and open to all residents regardless of nationality — non-discriminatory by design, even if the outcomes correlate with home language. Article 14 of the EU Charter only requires access, not linguistic accommodation." },
            { q: "Can you homeschool?", a: "Luxembourg permits homeschooling under conditions: annual inspection by MENJE (education ministry), a curriculum comparable to the public one, and specific competence in the languages of instruction. It's rare and heavily supervised." }
        ],
        links: { studySections: [{ module: "module1", index: 1 }], questionsModule: 1 }
    },
    {
        id: "sc_denied_healthcare",
        title: "You're refused urgent medical care",
        icon: "🏥",
        module: 1,
        relatedChapters: ["ch5", "ch6"],
        premise: "You arrive at the CHL emergency room. Reception says your health insurance isn't active. They ask you to pay upfront or leave. What are your rights?",
        beats: [
            { q: "The constitutional guarantee", a: "The right to health protection is a second-generation social right in Luxembourg's Constitution. The state has a positive duty to organise a health system, but the right does not translate into 'any care, any time, free at the point of use'." },
            { q: "Emergency care is different", a: "Under Luxembourg law and medical ethics (deontological code of the Collège médical), a hospital must provide life-saving emergency care regardless of insurance status or ability to pay. Refusing emergency care is a criminal offence for the doctor and a civil violation for the institution." },
            { q: "Who pays?", a: "If you're insured under CNS (Caisse nationale de santé) but paperwork is stale, the CNS will still reimburse when it's sorted out. If you're uninsured, you'll be billed — but only after receiving care. Emergency triage cannot be conditioned on payment." },
            { q: "If you have no money at all?", a: "The Office social of your commune can cover urgent care for indigent residents. Foreign residents including undocumented ones have access to emergency care and, since Luxembourg's implementation of EU directive 2011/24, minimum guarantees for cross-border care too." },
            { q: "If refused anyway?", a: "Complain to the Ministère de la Santé (health ministry), Ombudsman (Médiateur de la Grande-Duché), or file a criminal complaint for non-assistance to a person in danger (Article 410-1 Penal Code)." }
        ],
        links: { studySections: [{ module: "module1", index: 1 }], questionsModule: 1 }
    },
    {
        id: "sc_religious_symbols",
        title: "Can you wear a religious symbol at work?",
        icon: "☪️",
        module: 1,
        relatedChapters: ["ch6"],
        premise: "You start a new job. Your employer says visible religious symbols aren't allowed in customer-facing roles. Legal?",
        beats: [
            { q: "The right", a: "Freedom of religion — Article 19 of Luxembourg's Constitution, Article 9 ECHR, Article 10 EU Charter. It includes the right to manifest religion in public, which covers wearing religious dress or symbols." },
            { q: "But limits exist", a: "The right can be restricted for reasons prescribed by law: public safety, public order, health, morals, or the rights of others. An employer's blanket ban is not automatically legal but can be justified in narrow cases." },
            { q: "The CJEU cases", a: "In G4S Secure Solutions (2017), the Court of Justice of the EU ruled that a private company's neutral dress code banning all visible political/religious/philosophical signs can be lawful if applied consistently and pursued a genuine business need. A ban targeting only religious symbols would be discriminatory." },
            { q: "Public sector?", a: "Higher scrutiny. Luxembourg's public administration operates under strict neutrality but has not gone as far as France in banning religious dress. Individual restrictions have to be justified by the specific function." },
            { q: "Where do you go?", a: "Labour Court first. Then Court of Appeal. Ultimately the ECHR (Strasbourg) or CJEU (Luxembourg City) via preliminary reference. Both courts have full jurisdiction to review such cases." }
        ],
        links: { studySections: [{ module: "module1", index: 1 }, { module: "module1", index: 3 }], questionsModule: 1 }
    },
    {
        id: "sc_data_deletion",
        title: "You want your data erased from a website",
        icon: "🗑️",
        module: 1,
        relatedChapters: ["ch6"],
        premise: "A news site's old article about you appears when anyone Googles your name. You want it gone. Can you force it?",
        beats: [
            { q: "The right to be forgotten", a: "Established by the CJEU (Court of Justice of the EU in Luxembourg City) in the 2014 Google Spain case, and now codified in Article 17 of the GDPR — the 'right to erasure'. Luxembourg residents can use it." },
            { q: "Does it always work?", a: "No. It's balanced against freedom of information (ECHR Article 10). Public interest, the accuracy of the information, whether the person is a public figure, and how old the article is all factor in. Politicians rarely win. Private individuals often do — especially for old, minor matters." },
            { q: "How do you exercise it?", a: "Contact the data controller (the website or Google) directly with a written request citing GDPR Article 17. They have 30 days to respond (extendable to 90). If they refuse or ignore, escalate." },
            { q: "Escalation route", a: "CNPD (Luxembourg data protection authority) can investigate and fine. National courts can order takedown. The CJEU can be asked to interpret GDPR through preliminary reference." },
            { q: "De-indexing vs deletion", a: "Google removing a URL from search results (de-indexing) is easier than getting the original publisher to delete. Most 'right to be forgotten' cases end with de-indexing but the article stays online." }
        ],
        links: { studySections: [{ module: "module1", index: 1 }, { module: "module1", index: 3 }], questionsModule: 1 }
    },
    // ================================================================
    // MODULE 2 — INSTITUTIONS (7 additional scenarios)
    // ================================================================
    {
        id: "sc_run_for_office",
        title: "You want to run for the Chamber of Deputies",
        icon: "🎪",
        module: 2,
        relatedChapters: ["ch3", "ch6"],
        premise: "You've naturalised. It's an election year. You want a seat in Parliament. What does it take?",
        beats: [
            { q: "Eligibility", a: "You must be a Luxembourg national, at least 18, domiciled in Luxembourg, and enjoying full civic and political rights (not stripped by a criminal conviction). Nationality is non-negotiable — no shortcuts." },
            { q: "Which constituency?", a: "Luxembourg has four: South (23 seats), Centre (21), North (9), East (7). You run in the one where you live. Each constituency elects its own MPs by proportional representation." },
            { q: "Who can't run?", a: "Judges, members of the Council of State, and civil servants in certain sensitive roles cannot hold a parliamentary seat simultaneously. This is called 'incompatibility'. You must resign one to take the other." },
            { q: "How do voters vote?", a: "Each voter gets as many votes as there are seats in their constituency (23 in the South, etc.). They can distribute those votes across candidates from multiple parties — this is called 'panachage' and is central to Luxembourgish politics." },
            { q: "How seats get allocated", a: "By proportional representation using the smallest electoral quotient method (Hagenbach-Bischoff). Small parties can win seats — the threshold is effectively 1/(seats+1) of the vote in a constituency." },
            { q: "What's the term?", a: "5 years. Voting is compulsory for registered voters. If elected, you're paid, get an office, and can propose bills ('proposition de loi') but the government's own bills ('projet de loi') dominate the legislative calendar." }
        ],
        links: { studySections: [{ module: "module2", index: 5 }, { module: "module2", index: 3 }], questionsModule: 2 }
    },
    {
        id: "sc_grand_duke_refuses",
        title: "The Grand Duke refuses to sign a law (real event)",
        icon: "👑",
        module: 2,
        relatedChapters: ["ch6"],
        premise: "December 2008. Parliament passes a law legalising euthanasia. Grand Duke Henri, on grounds of conscience, refuses to sign it. What happens next?",
        beats: [
            { q: "Constitutional crisis", a: "Under the pre-2008 Constitution, the Grand Duke had to 'sanction and promulgate' every law before it could take effect. Henri's refusal was the first such veto in modern Luxembourgish history. If honoured literally, it would give one unelected person a permanent veto over democratic legislation." },
            { q: "How was it resolved?", a: "Speed-run constitutional reform. Within weeks Parliament amended Article 34 of the Constitution: the Grand Duke now only 'promulgates' laws (announces them publicly). The 'sanctioning' step — which implied approval — was removed. Henri's role became purely ceremonial." },
            { q: "Did the euthanasia law take effect?", a: "Yes, on 1 April 2009, after the constitutional amendment. Luxembourg became the third EU country to permit euthanasia (after the Netherlands and Belgium)." },
            { q: "What's left of the Grand Duke's power?", a: "The Grand Duke is inviolable (immune from prosecution) and still formally appoints/dismisses the government, dissolves Parliament, and represents the state internationally. But every act must be countersigned by a minister who takes political responsibility. Real power lies with the government." },
            { q: "Why does this matter for the exam?", a: "The 2008 amendment is fresh enough that older textbooks still say the Grand Duke 'sanctions' laws — wrong. He only promulgates them. This is a common trick question." }
        ],
        links: { studySections: [{ module: "module2", index: 2 }, { module: "module2", index: 8 }], questionsModule: 2 }
    },
    {
        id: "sc_municipal_challenge",
        title: "You challenge a municipal decision",
        icon: "🏛️",
        module: 2,
        relatedChapters: ["ch6"],
        premise: "Your commune refuses to grant you a building permit for a modest extension. You think the decision is wrong. Where do you go?",
        beats: [
            { q: "First step: internal appeal", a: "Every municipal decision comes with an information notice explaining how to challenge it. You typically have 3 months to file an appeal with the mayor or municipal council for reconsideration. This is often faster than going to court." },
            { q: "The tutelle", a: "Luxembourg's central government has 'tutelle' (supervisory oversight) over communes. Certain classes of municipal decisions (budget, major zoning changes) require ministerial approval. If your issue involves a decision that needed ministerial sign-off, you can also address the Ministry of Home Affairs." },
            { q: "Administrative Tribunal", a: "For contested administrative decisions, you file with the Administrative Tribunal (Tribunal administratif). It handles disputes between individuals and the state or communes. The tribunal can annul the decision or require the commune to reconsider." },
            { q: "Administrative Court on appeal", a: "If the Tribunal rules against you, appeal to the Administrative Court (Cour administrative). This is the top of the administrative branch — separate from the 'ordinary' courts that handle civil and criminal cases." },
            { q: "Which order of courts is which?", a: "Luxembourg's judiciary has two branches. Ordinary: Magistrates → District → Court of Appeal → Court of Cassation, for civil/commercial/criminal. Administrative: Tribunal → Court, for state and commune disputes. Constitutional questions go to the 9-member Constitutional Court, but only via referral from another court." }
        ],
        links: { studySections: [{ module: "module2", index: 7 }, { module: "module2", index: 8 }], questionsModule: 2 }
    },
    {
        id: "sc_government_falls",
        title: "The government loses a vote of confidence",
        icon: "💼",
        module: 2,
        relatedChapters: ["ch6"],
        premise: "A key minister is caught in a scandal. The opposition tables a motion of censure. Parliament votes against the government. Now what?",
        beats: [
            { q: "The motion", a: "A motion of censure (motion de censure) is a formal vote by which Parliament withdraws its confidence in the government. In Luxembourg's system, the government is politically answerable to Parliament — it must resign if it loses such a vote." },
            { q: "Automatic resignation", a: "Yes — ministers must resign after a negative confidence vote. This is enforced by constitutional convention, not by force. No one has ever tried to hold onto power after losing such a vote in modern Luxembourg." },
            { q: "What does the Grand Duke do?", a: "He accepts the resignation and appoints a 'formateur' — usually the leader of the largest party in Parliament, or someone who can build a new coalition. The formateur consults, forms a coalition, and becomes Prime Minister when the new government is sworn in." },
            { q: "Can the Grand Duke dissolve Parliament instead?", a: "Yes, formally. In practice this is done on the advice of the government — a last-resort move when no coalition can be formed. It triggers early elections." },
            { q: "Real example?", a: "The 2013 SREL affair (intelligence-service scandal) forced PM Juncker's government to fall. Rather than a censure vote, Juncker resigned and called early elections, which he lost. This is closer to how Luxembourg governments actually change hands." }
        ],
        links: { studySections: [{ module: "module2", index: 4 }, { module: "module2", index: 8 }], questionsModule: 2 }
    },
    {
        id: "sc_chamber_process",
        title: "How does a bill actually pass?",
        icon: "🧾",
        module: 2,
        relatedChapters: ["ch3", "ch6"],
        premise: "The government has just filed a 'projet de loi' on housing. Walk through what happens between filing and publication in the Mémorial.",
        beats: [
            { q: "Step 1: filing", a: "The government tables its 'projet de loi' with the Chamber of Deputies. If an MP had filed a private member's bill, it would be a 'proposition de loi'. Same process afterwards — different origin." },
            { q: "Step 2: Council of State opinion", a: "The 21-member Council of State issues a mandatory advisory opinion (avis) on the bill. It reviews for constitutional and legal problems. Its opinion is advisory but weighty — Parliament rarely ignores serious warnings." },
            { q: "Step 3: parliamentary committee", a: "A specialised committee of MPs examines the bill line by line, hears witnesses, and may propose amendments. Real drafting happens here." },
            { q: "Step 4: first vote", a: "The full Chamber (60 MPs) votes on the amended bill. Simple majority required." },
            { q: "Step 5: second vote?", a: "The Constitution normally requires a second vote at least 3 months later — to allow reflection. BUT the Council of State can grant a dispensation from this second vote, and usually does. If the Council refuses (its 'suspensive veto'), the second vote is mandatory." },
            { q: "Step 6: Grand Duke and Mémorial", a: "After Parliament approves (once or twice), the Grand Duke promulgates the law. It is then published in the Mémorial (official gazette). Only after publication does it take legal effect. Every citizen is deemed to know the law from that date — no personal notification required." }
        ],
        links: { studySections: [{ module: "module2", index: 8 }, { module: "module2", index: 3 }, { module: "module2", index: 4 }], questionsModule: 2 }
    },
    {
        id: "sc_council_of_state",
        title: "What actually is the Council of State?",
        icon: "🏦",
        module: 2,
        relatedChapters: ["ch3"],
        premise: "You keep hearing about the 'Council of State' in legal discussions. It has 21 members, appointed by the Grand Duke. It's not a court. It's not part of the government. What does it do?",
        beats: [
            { q: "Origin", a: "Luxembourg is unicameral — only one legislative chamber. The Council of State was created to fill the role that a second chamber (like the French Senate or British House of Lords) plays elsewhere: reflection, review, restraint." },
            { q: "The two main jobs", a: "First, it issues mandatory advisory opinions on all legislation before Parliament votes. Second, it exercises the 'suspensive veto' — it can refuse the dispensation from the mandatory second vote, forcing Parliament to wait at least 3 months." },
            { q: "Who's on it?", a: "21 members appointed by the Grand Duke. Historically they are senior lawyers, retired politicians, former judges, academics. Appointments are for 15 years (renewable). Not elected — deliberately independent from party politics." },
            { q: "Can it block a law forever?", a: "No — its veto is suspensive, not absolute. It can delay a law by 3 months. Parliament can always override by voting a second time. The Council's real power is moral authority: if it says a law violates the Constitution or an international treaty, ignoring it looks reckless." },
            { q: "What it's NOT", a: "Not a court (that's the Constitutional Court, 9 members). Not part of the government (ministers). Not the same as the Council of Europe (that's the 46-country international organisation in Strasbourg). Confusing names — the exam plays on this." }
        ],
        links: { studySections: [{ module: "module2", index: 3 }, { module: "module2", index: 8 }], questionsModule: 2 }
    },
    {
        id: "sc_constitutional_court",
        title: "How the Constitutional Court works",
        icon: "⚖️",
        module: 2,
        relatedChapters: ["ch3", "ch6"],
        premise: "Someone tells you: 'That law is unconstitutional!' You can't just sue over it. Then how do constitutional questions actually reach the Constitutional Court?",
        beats: [
            { q: "No direct petition", a: "Unlike Germany's Bundesverfassungsgericht, Luxembourg's Constitutional Court does NOT accept direct petitions from citizens. You cannot walk up and say 'this law violates my rights, strike it down'. There is one filter: an ordinary court hearing your case must refer the constitutional question." },
            { q: "The referral mechanism", a: "In the middle of any lawsuit — civil, criminal, administrative — if a judge suspects that the applicable law violates the Constitution, they can (and sometimes must) refer the question to the Constitutional Court. The judge suspends the case until the Constitutional Court answers." },
            { q: "Who sits on the Court?", a: "9 members. President, Vice-President, and Presidents of the Supreme Court of Justice and Administrative Court are members ex officio. Others are appointed by the Grand Duke. Judges keep their day jobs — the court is not full-time." },
            { q: "What can they rule on?", a: "Only whether a law (act of parliament) conforms to the Constitution. They CANNOT rule on treaties, on government decrees, or on individual government actions. Those are handled by ordinary and administrative courts." },
            { q: "What if the law is unconstitutional?", a: "The Court declares it non-conforming. The referring court then decides the underlying case without applying that law. Parliament typically amends the law afterwards to fix the constitutional defect. The Court does not have the power to 'strike down' laws erga omnes in one act — the effect ripples through the case law." }
        ],
        links: { studySections: [{ module: "module1", index: 3 }, { module: "module2", index: 7 }], questionsModule: 2 }
    },
    // ================================================================
    // MODULE 3 — HISTORY & EUROPEAN INTEGRATION (7 additional scenarios)
    // ================================================================
    {
        id: "sc_1942_strike",
        title: "The general strike of 31 August 1942",
        icon: "✊",
        module: 3,
        relatedChapters: ["ch4"],
        premise: "Nazi occupation. Yesterday, the Gauleiter decreed forced conscription of young Luxembourgish men into the Wehrmacht. Today, workers stop working across the country. Why does this matter?",
        beats: [
            { q: "The trigger", a: "On 30 August 1942, Gauleiter Gustav Simon decreed compulsory military service for Luxembourgers born 1920-1924. This wasn't voluntary conscription — it was a forced draft into the army of the invader. Around 11,000 young men would eventually be conscripted this way. About 2,800 would die." },
            { q: "The reaction", a: "The next morning, 31 August 1942, workers walked off the job. It began in Wiltz and spread to Schifflange, Differdange, Dudelange, then the capital. Teachers refused to teach. Postal workers refused to sort mail. It was Western Europe's only general strike against Nazi occupation." },
            { q: "The reprisal", a: "Swift and brutal. 21 strike leaders were tried by a special court and shot within days. Hundreds were deported to concentration camps. Ettelbruck and other municipalities were placed under emergency rule. The forced conscription proceeded regardless." },
            { q: "Was it worth it?", a: "In pure military terms, no — it didn't stop the draft. But it became the foundational act of Luxembourg's resistance narrative. It proved to occupiers and post-war courts alike that the population had NOT consented to Germanisation. It is why post-war Luxembourg was treated as a resistant occupied country, not a collaborator state." },
            { q: "Today", a: "Every 31 August, wreaths are laid at memorials in Wiltz and Luxembourg City. The National Museum of the Resistance in Esch-sur-Alzette is centred on this event. Ask any Luxembourger about their grandparents and you will hear about 'de Streik'." }
        ],
        links: { studySections: [{ module: "module3", index: 6 }], questionsModule: 3 }
    },
    {
        id: "sc_border_commuter",
        title: "You work in Luxembourg but live in Metz",
        icon: "🚆",
        module: 3,
        relatedChapters: ["ch5", "ch6"],
        premise: "You accept a Luxembourg job but keep your apartment in Metz, France. 200,000 other people do the same thing every day. How does that work?",
        beats: [
            { q: "The Schengen guarantee", a: "The 1985 Schengen Agreement (in force 1995) abolished passport checks at Luxembourg's borders with France, Germany, and Belgium. All four are in the Schengen area. Combined with EU free movement of workers (Article 45 TFEU), you can commute daily with no immigration barrier." },
            { q: "Where do you pay income tax?", a: "In the country where you WORK, not where you live. Luxembourg-France, Luxembourg-Germany, and Luxembourg-Belgium bilateral tax treaties clarify this. Luxembourg wages get Luxembourg taxes withheld. Your home country credits you for that." },
            { q: "Where do you pay social security?", a: "Also Luxembourg. EU coordination rules (Regulation 883/2004) ensure your Luxembourg contributions count for pension in France when you retire — no double payment, no lost credits." },
            { q: "Where does your family use healthcare?", a: "You're insured through Luxembourg's CNS. Your family in Metz can use the French system with EHIC or the S1 form for cross-border coverage. Reimbursements flow between the two social security systems." },
            { q: "What about telework?", a: "This got complicated during COVID. Working from home in France more than 34 days a year could shift your social security to France under EU rules — bad for both employer and employee. Luxembourg negotiated bilateral tolerances and, since 2023, a permanent 34-day/year telework threshold with France." },
            { q: "How big is this?", a: "About 46% of Luxembourg's workforce is cross-border commuters — 217,000 people in 2024 numbers. Half from France, a quarter each from Germany and Belgium. Without them, the Luxembourg economy would collapse overnight." }
        ],
        links: { studySections: [{ module: "module3", index: 7 }, { module: "module3", index: 8 }], questionsModule: 3 }
    },
    {
        id: "sc_naturalisation",
        title: "You want to become Luxembourgish",
        icon: "🎓",
        module: 3,
        relatedChapters: ["ch6"],
        premise: "You've lived in Luxembourg for seven years. You've passed this exam. You've taken the language test. What's the actual process to naturalise?",
        beats: [
            { q: "Route 1: naturalisation by option", a: "The most common route. Requirements: 7 years of legal residence in Luxembourg (at least the last 12 months uninterrupted), pass the Vivre Ensemble exam, pass the Sproochentest (A2 speaking + B1 listening in Luxembourgish), no serious criminal record." },
            { q: "Route 2: by descent", a: "If you have a Luxembourgish ancestor who was Luxembourgish citizen on 1 January 1900 — even a distant one — you can 'recover' Luxembourgish nationality by option, no residency required. This route ends in December 2025. Many Americans of Luxembourgish descent have used it." },
            { q: "Route 3: by marriage", a: "3 years of marriage to a Luxembourgish national + 3 years living together in Luxembourg (or 5 years living abroad but reasonable engagement with the country). Same language and civic tests apply." },
            { q: "The dossier", a: "Compile: birth certificate (legalised or apostilled), proof of residence for 7 years, criminal record extract from every country you've lived in as an adult, Sproochentest certificate, Vivre Ensemble certificate. Submit to your commune. It travels to the Ministry of Justice." },
            { q: "The waiting", a: "6 to 24 months. During this time your dossier is reviewed by multiple ministries. You may be asked for additional documents." },
            { q: "The oath", a: "Once approved, you're invited to a ceremony at your commune. You take an oath of fidelity to the Grand Duke and to observe the Constitution and laws. From that moment, you're Luxembourgish. Your existing citizenship stays (dual since 2008) unless your other country strips it." }
        ],
        links: { studySections: [{ module: "module3", index: 9 }], questionsModule: 3 }
    },
    {
        id: "sc_euro_changeover",
        title: "The franc becomes the euro — 1 January 2002",
        icon: "💶",
        module: 3,
        relatedChapters: ["ch5"],
        premise: "For 158 years, Luxembourg had used the Luxembourgish franc, then in monetary union with the Belgian franc since 1921. One morning in 2002 it was gone. How and why?",
        beats: [
            { q: "The Maastricht path", a: "The 1992 Treaty of Maastricht created the euro as a project. Countries had to meet the 'convergence criteria' — inflation, deficit, debt, exchange rate stability. Luxembourg met them easily and was among the first 11 to adopt the euro." },
            { q: "The electronic euro", a: "1 January 1999: the euro became a real currency electronically. Bank accounts, financial transactions, and Luxembourg's national debt were denominated in euros. But cash was still francs — everyday shopping didn't change yet." },
            { q: "The cash changeover", a: "1 January 2002: euro banknotes and coins entered circulation. For a few weeks francs and euros were both accepted. By 28 February 2002, francs ceased to be legal tender. Old francs could still be exchanged at the Banque centrale du Luxembourg for years afterwards (some categories indefinitely)." },
            { q: "The fixed rate", a: "1 euro = 40.3399 Luxembourgish francs (identical to Belgian francs due to the BLEU union). This rate was set irrevocably. Every price and every debt was converted at that rate on 1.1.1999." },
            { q: "What Luxembourg gave up", a: "Monetary sovereignty. Interest rates are now set by the European Central Bank in Frankfurt for the entire euro area. Luxembourg has one seat among 20 on the ECB Governing Council." },
            { q: "What Luxembourg gained", a: "Elimination of currency risk for its huge cross-border trade, cheaper transactions, deeper capital markets. For a country whose financial sector is a quarter of GDP and whose workforce is 46% cross-border, the euro was net enormous." }
        ],
        links: { studySections: [{ module: "module3", index: 7 }, { module: "module3", index: 8 }], questionsModule: 3 }
    },
    {
        id: "sc_free_transit",
        title: "Free public transport nationwide (2020)",
        icon: "🚌",
        module: 3,
        relatedChapters: ["ch6"],
        premise: "On 29 February 2020, Luxembourg became the first country in the world to make all public transport free. Buses, trains, trams — no fare. Why?",
        beats: [
            { q: "The problem", a: "Luxembourg's roads are among the most congested in Europe. Around 46% of the workforce commutes across a border. The 2005-2020 population grew by ~50%. Cars were choking the country." },
            { q: "The policy", a: "The Bettel government abolished all public transport fares for domestic journeys — regardless of nationality, residency, or age. Cross-border trains still charge to the border, then are free within Luxembourg. Second-class only; first class still costs." },
            { q: "The cost", a: "About 41 million euros a year in lost ticket revenue — replaced by general taxation. This is a rounding error in a national budget of ~30 billion euros. Ticketing infrastructure was also expensive to run." },
            { q: "Did it work?", a: "Mixed evidence. It boosted ridership modestly but the bigger impact was on inequality — poorer commuters saved several hundred euros a year. Environmental and congestion effects have been marginal without complementary policies (road pricing, parking limits)." },
            { q: "How does it fit constitutionally?", a: "The 2023 constitutional revision explicitly recognises 'sustainable development' and environmental protection as constitutional objectives. Free public transport aligns with these — though it wasn't required by them. The policy is easier to reverse than to implement, so it may not last forever." }
        ],
        links: { studySections: [{ module: "module3", index: 9 }], questionsModule: 3 }
    },
    {
        id: "sc_schengen_signing",
        title: "The boat in the middle of a river",
        icon: "⛴️",
        module: 3,
        relatedChapters: ["ch5"],
        premise: "14 June 1985. Five ministers gather on a small riverboat anchored on the Moselle near the tiny Luxembourg village of Schengen. They sign a treaty. What was so unusual about it?",
        beats: [
            { q: "The location", a: "Schengen is a wine village of ~500 people on the Moselle, at the point where France, Germany, and Luxembourg meet. The signing took place on the MS Princesse Marie-Astrid — a boat anchored in the middle of the river where all three countries met. Symbolic and legally clever: no country was 'hosting'." },
            { q: "The parties", a: "Five countries signed: France, West Germany, Belgium, Netherlands, and Luxembourg. Not all EEC members — the UK and Italy stayed out initially. The treaty was outside the EEC framework — an intergovernmental agreement." },
            { q: "The idea", a: "Gradual abolition of controls at internal borders. Movement of people would become as free as the movement of goods was becoming inside the EEC. Border checks would eventually vanish and be replaced by coordinated external border controls." },
            { q: "The delay", a: "Symbolic signing 1985. Actual implementation 1995 — 10 years later. Technical and political questions took that long. The 'Schengen Convention' of 1990 spelled out the details: shared visa policy, coordinated border databases, hot pursuit rules." },
            { q: "Today", a: "27 countries. About 400 million people. Most EU members plus Iceland, Norway, Switzerland, and Liechtenstein. Ireland stayed out; the UK left with Brexit. Bulgaria and Romania joined progressively in 2024-25. It survived the 2015 migration crisis and COVID, though both saw temporary reintroductions of checks." },
            { q: "The village today", a: "There's now a European Museum in Schengen. You can see the boat, the signing table, and the borders. The word 'Schengen' is now used metonymically in ~26 languages." }
        ],
        links: { studySections: [{ module: "module3", index: 7 }, { module: "module3", index: 8 }], questionsModule: 3 }
    },
    {
        id: "sc_siegfried_963",
        title: "The deed of 963 that founded a country",
        icon: "🏯",
        module: 3,
        relatedChapters: ["ch1"],
        premise: "Count Siegfried walks into the abbey of St Maximin of Trier with a proposal. He wants a hilltop ruin in exchange for some flat farmland. The monks agree. Nobody realises they are founding a country.",
        beats: [
            { q: "What did Siegfried actually get?", a: "A crumbling Roman-era fortification on the Bock — a rocky promontory jutting out above the Alzette river. The monks called it Lucilinburhuc — 'small castle'. Militarily impressive, agriculturally useless. Trade favoured the abbey on paper." },
            { q: "Why 963 as the founding date?", a: "That is the year the deed of exchange is dated. There was no formal 'founding of Luxembourg' — historians treat the deed as the earliest documented moment when the place we now call Luxembourg existed as a defined territory under a named lord." },
            { q: "Where does the name come from?", a: "Lucilinburhuc → Lützelburg → Lëtzebuerg. The Luxembourgish 'Lëtzebuerg', French 'Luxembourg', and German 'Luxemburg' are all descendants of the same word for 'small castle'. The English name uses the French spelling." },
            { q: "How did a small castle become an empire?", a: "Siegfried's descendants married well and fought smart. In 1308, Count Henry VII was elected King of the Romans; in 1312, crowned Holy Roman Emperor. The House of Luxembourg gave the Empire FOUR emperors — Henry VII, Charles IV, Wenceslas, and Sigismund." },
            { q: "When did it become a Duchy?", a: "1354. Emperor Charles IV (himself a Luxembourger) elevated the County to a Duchy. The first titular Duke was his half-brother Wenceslas I. This is the rank Luxembourg held until 1815, when the Congress of Vienna promoted it again — to Grand Duchy." },
            { q: "Why did it end in 1443?", a: "The Duchy passed to weaker heirs. Philip the Good, Duke of Burgundy, conquered Luxembourg by force in 1443. Self-rule ended. What followed was 372 years of Burgundian, then Habsburg, then French, then Austrian rule — the story of chapter 2." }
        ],
        links: { studySections: [{ module: "module3", index: 0 }], questionsModule: 3 }
    },
    {
        id: "sc_fortress_of_europe",
        title: "The Gibraltar of the North (1443–1795)",
        icon: "🛡️",
        module: 3,
        relatedChapters: ["ch2"],
        premise: "You visit the Bock casemates today and walk 23 km of tunnels carved into sandstone. Most of what you see was built by people who never asked Luxembourgers for permission. Who built what — and why does it matter?",
        beats: [
            { q: "Why the fortress kept growing", a: "Whoever ruled Luxembourg was fighting the country ranked opposite it on the map. Spanish Habsburgs feared France. French feared Habsburgs. Austrians feared France. Everyone reinforced the fortress they had inherited — you don't demolish a defence built at someone else's expense." },
            { q: "The order of owners", a: "Burgundy (1443–1477), Spanish Habsburgs (1556 onwards, after Charles V split his empire), a French interlude under Louis XIV (1684–1697), Austrian Habsburgs (1714 onwards, via the Treaty of Utrecht), and finally the French Republic (1795–1814)." },
            { q: "The French moment: Vauban 1684", a: "Louis XIV conquered Luxembourg in 1684 in a matter of weeks. His military architect Sébastien Le Prestre de Vauban immediately redesigned the fortress with the star-shaped bastions that were the state of the art. Even after France gave the territory back to Spain in 1697, the Vauban design stayed — and every later occupier built on it." },
            { q: "How Revolutionary France ended the Duchy", a: "In 1795, French Revolutionary armies annexed Luxembourg and dissolved the Duchy. The territory was reorganised as the Département des Forêts. For 19 years, Luxembourgers were legally French citizens under Napoleonic law — until Napoleon fell in 1814." },
            { q: "Why did any of this matter later?", a: "The 372 years of foreign rule shaped everything after. The fortress was so strong that in 1867 Europe nearly went to war over who would control it — leading to Luxembourg's forced neutrality and the dismantling of the fortress. And the casemates today (UNESCO 1994) are Luxembourg's biggest tourist site." },
            { q: "What did Luxembourgers get out of 372 years?", a: "Very little politically. But the trilingual habit — French from the west, German from the east — took root under this parade of foreign administrations. It is one direct line from the fortress era to the trilingual country of today." }
        ],
        links: { studySections: [{ module: "module3", index: 1 }], questionsModule: 3 }
    },
    {
        id: "sc_charlotte_exile",
        title: "The Grand Duchess broadcasts from London",
        icon: "📻",
        module: 3,
        relatedChapters: ["ch4"],
        premise: "Berlin, May 1940. German troops have crossed the border again. In Luxembourg City, Grand Duchess Charlotte has hours to decide whether to stay or flee. What she does next will define Luxembourgish legitimacy for the whole war.",
        beats: [
            { q: "The decision to flee", a: "Charlotte and her government chose to leave the country rather than stay under occupation. They left on 10 May 1940 — the same day of the invasion — heading first to France, then Portugal, then the UK, then Canada, and finally back to London. Staying would have handed the Nazis a puppet head of state." },
            { q: "Why exile mattered legally", a: "Under international law, a government-in-exile carrying its state's legitimacy abroad prevents the occupier from claiming legal control. This is why Charlotte's flight was strategic, not cowardice. It also let the Allies recognise a continuous Luxembourgish state throughout the war." },
            { q: "The BBC broadcasts", a: "Charlotte spoke to occupied Luxembourg on the BBC in Luxembourgish. Her voice became the sound of a country that still existed. The general strike of 31 August 1942 was partly triggered by knowing there was a government-in-exile to represent them." },
            { q: "The 1942 forced conscription", a: "Gauleiter Gustav Simon decreed on 30 August 1942 that Luxembourgers born 1920-1924 would be drafted into the Wehrmacht. This was Germanisation at its worst — treating Luxembourgers as Germans. About 11,000 young men were eventually conscripted; roughly 2,800 died. The next day, workers went on strike." },
            { q: "The general strike of 31 August 1942", a: "Western Europe's only general strike under Nazi occupation. It began in Wiltz and spread. 21 strikers were shot within days after summary trials. Hundreds deported. It didn't stop the conscription, but it did establish that Luxembourg had NOT consented — a critical fact for post-war recognition as a resistant country." },
            { q: "Return and reconstruction", a: "Charlotte returned on 14 April 1945. The country had lost 2% of its population. Post-war, 5,006 people were sentenced for collaboration; 12 death sentences, 8 executed. Charlotte reigned until she abdicated in favour of her son Jean in 1964." }
        ],
        links: { studySections: [{ module: "module3", index: 6 }], questionsModule: 3 }
    },
    {
        id: "sc_steel_to_finance",
        title: "How steel workers became a fund industry",
        icon: "🔥",
        module: 3,
        relatedChapters: ["ch5", "ch6"],
        premise: "In 1970, steel was ~30% of GDP and ~17% of the workforce. Today it is a small fraction of both. Finance is the giant now — ~25% of GDP. How did Luxembourg pull off one of the fastest economic pivots in modern Europe?",
        beats: [
            { q: "The steel century", a: "It started in 1842 when Luxembourg joined the German Zollverein and could suddenly sell iron and coal into a huge tariff-free market. In 1879 Emile Metz bought the licence to the Thomas process — which finally let engineers make good steel from Luxembourg's phosphorus-heavy iron ore. First integrated steelworks: Dudelange, 1886. By 1970, ARBED was Luxembourg's economic centre." },
            { q: "The 1974 crash", a: "The oil crisis of 1973 cratered global steel demand. Luxembourg's steel industry began a slow-motion collapse: 25,000 jobs disappeared over 20 years. The last mine closed in 1981. The last blast furnace closed in 1997. Whole towns in the south (Esch-sur-Alzette, Differdange) had to reinvent themselves." },
            { q: "The tripartite model", a: "Rather than mass layoffs, the government, unions, and employers negotiated. Workers took early retirement or moved to state jobs. Nobody was left destitute. This 'Luxembourg model' of tripartite social dialogue is still how big economic shocks are handled." },
            { q: "Where finance came from", a: "The seed was 1929 — a law creating tax-favoured holding companies. Then in the 1960s, London banks started using Luxembourg as a base for Eurodollar and Eurobond issuance to sidestep US Regulation Q and UK taxes. By 1988 Luxembourg had a UCITS law that let it dominate cross-border investment funds. Today it is the world's second-largest fund centre after the United States." },
            { q: "Then Big Tech and space", a: "Since 2000 Luxembourg has attracted the European HQs of Amazon, eBay, PayPal, iTunes/Apple, and Skype. Separately, SES — one of the world's biggest satellite operators — has grown into a 50+ satellite fleet from a country of 700,000 people. Luxembourg has even legislated on asteroid mining rights (2017)." },
            { q: "ARBED's afterlife", a: "The steel company itself didn't die. ARBED merged with French Usinor and Spanish Aceralia in 2002 to form Arcelor. In 2006, Arcelor merged with Mittal Steel to form ArcelorMittal — the world's largest steel producer. Headquartered in Luxembourg City. Steel didn't disappear from Luxembourg — it went global." }
        ],
        links: { studySections: [{ module: "module3", index: 9 }, { module: "module3", index: 8 }], questionsModule: 3 }
    },
    {
        id: "sc_three_presidents",
        title: "Three Luxembourgers ran the EU",
        icon: "🇪🇺",
        module: 3,
        relatedChapters: ["ch5", "ch6"],
        premise: "Between 1981 and 2019 — a span of 38 years — three Luxembourgers served as President of the European Commission. In a Commission with 27 member states, this is remarkable. Who were they, and why did a small country punch so far above its weight?",
        beats: [
            { q: "Gaston Thorn (1981–1985)", a: "Former Prime Minister of Luxembourg (1974–1979). Presided over the Commission during the entry of Greece into the EEC. Best known for pushing for what became the Single European Act — the treaty that turned the common market into a real single market. Died in 2007." },
            { q: "Jacques Santer (1995–1999)", a: "Also a former Prime Minister of Luxembourg (1984–1995). His Commission introduced the euro on 1 January 1999. But it also resigned en masse in March 1999 after a fraud and mismanagement scandal — the first (and only) Commission ever to do so. Santer stayed until his term formally ended." },
            { q: "Jean-Claude Juncker (2014–2019)", a: "The longest-serving Prime Minister of Luxembourg (1995–2013) before becoming Commission President. Ran the EU through the Greek debt crisis (as Eurogroup president), Brexit negotiations, and the migration crisis. Known for the 'Juncker Plan' — a €315 billion investment programme." },
            { q: "Why so many Luxembourgers?", a: "Small country, careful diplomacy. Luxembourg is trusted by everyone precisely because it threatens no one. A Luxembourger at the top can broker deals a French or German president couldn't. Luxembourg also insists that founding members deserve continued visibility — and there's little any big country can do about it." },
            { q: "Beyond the three", a: "Luxembourgers have also held: Pierre Werner (author of the 1970 'Werner Plan' — the first blueprint for the euro), Robert Schuman (Luxembourg-born, though he served France; the Schuman Declaration of 9 May 1950 launched European integration). The 9th of May is Europe Day precisely because of this." },
            { q: "What this means for the exam", a: "You need to know the three Commission presidents by name, in order, with their approximate dates. Thorn (early '80s), Santer (mid '90s), Juncker (2014-19). And you should know that Schuman was Luxembourg-born. All appear as exam questions." }
        ],
        links: { studySections: [{ module: "module3", index: 8 }], questionsModule: 3 }
    },
    {
        id: "sc_chambers_ces",
        title: "The advisory bodies you've never heard of",
        icon: "🗂️",
        module: 2,
        relatedChapters: ["ch3", "ch6"],
        premise: "Between the government proposing a law and Parliament voting on it, a network of advisory bodies weighs in. The Council of State is the big one — but there are also six 'Professional Chambers' and the Economic and Social Council. Who are they, and why does the exam care?",
        beats: [
            { q: "The six Professional Chambers", a: "Three represent EMPLOYERS: Chamber of Commerce, Chamber of Trades (Chambre des Métiers), Chamber of Agriculture. Three represent WORKERS: Chamber of Private Employees, Chamber of Civil Servants and Public Employees, Chamber of Labour (Chambre des Salariés). Every worker and every employer is represented in one of them — automatically." },
            { q: "What do they actually do?", a: "They must be consulted on any legislation affecting their members' economic interests. Their opinions are advisory, not binding — but a government that ignores a hostile chamber opinion is asking for social conflict. In practice, they shape labour law, tax law, and social security." },
            { q: "The Economic and Social Council (CES)", a: "Conseil économique et social. Established 1966, reformed several times. Advisory body on major economic, financial, and social questions. Members from unions, employers, and government-nominated experts. Publishes an annual report on the economic and social situation of the country." },
            { q: "Not the same as the Council of State", a: "Confusion is common. Council of STATE = 21 constitutional advisers, advises on all legislation, suspensive veto. Council of ECONOMIC AND SOCIAL affairs = tripartite think tank on economics. Different institutions, different roles, different powers. The exam plays on this." },
            { q: "The tripartite tradition", a: "When there's a big economic shock (steel crisis 1974, COVID 2020, energy crisis 2022), Luxembourg convenes 'the tripartite' — government + employer chambers + worker chambers. Decisions taken there become policy. It is one of the country's core political inventions." },
            { q: "Why this matters for you", a: "As a resident worker, you are automatically a member of the Chamber of Private Employees or Chamber of Civil Servants — depending on your job. You elect its representatives. That vote is separate from any political election. Most people never realise until they read the payslip." }
        ],
        links: { studySections: [{ module: "module2", index: 10 }, { module: "module2", index: 4 }], questionsModule: 2 }
    },
    {
        id: "sc_zollverein_bleu",
        title: "The customs unions that shaped Luxembourg",
        icon: "🚂",
        module: 3,
        relatedChapters: ["ch3", "ch4", "ch5"],
        premise: "For 200 years, Luxembourg has always been inside a customs union — but the partner keeps changing. Germany until 1918. Belgium from 1921. All of Europe from 1957. Why do these matter for the country's story?",
        beats: [
            { q: "1842 — Joining the Zollverein", a: "In 1842, Luxembourg joined the German Zollverein — the customs union that had been building since 1834 among German states. Suddenly Luxembourg's iron, coal, and later steel could enter Germany duty-free. This is what enabled the steel industry to exist. Luxembourg stayed in the Zollverein until World War I ended it in 1918." },
            { q: "The end of the Zollverein (1918)", a: "Germany lost the war. The Zollverein collapsed. Luxembourg — which had built its economy around German markets — suddenly needed a new partner. On the 1919 referendum, 80% chose an economic union with Belgium over France. The result was the BLEU (Belgo-Luxembourg Economic Union) in 1921." },
            { q: "BLEU (1921 onwards)", a: "Belgian franc and Luxembourgish franc pegged 1:1. Shared currency, shared trade policy, coordinated tariffs. This was a genuine union — not just a treaty. BLEU still exists inside the euro. Belgium and Luxembourg still coordinate on some economic matters as a bloc." },
            { q: "Benelux (1944/1948)", a: "In 1944 (still in exile in London), Belgium, Netherlands, and Luxembourg signed a treaty creating the Benelux Customs Union. It came into force in 1948. Free movement of goods among the three. Benelux was a model — many features later appeared in the EEC. Benelux still exists today as a smaller cooperation body." },
            { q: "ECSC (1951) and EEC (1957)", a: "The pattern kept going: Luxembourg joined every customs and integration union it was offered. ECSC in 1951 put steel and coal into a common market. EEC in 1957 was a full customs union across six countries — France, West Germany, Italy, Belgium, Netherlands, and Luxembourg." },
            { q: "Why it matters today", a: "Luxembourg's entire economic strategy is 'always be inside the biggest customs union available'. It has never known what it is to face tariffs on its exports. This is why any threat to the EU single market — Brexit, protectionism — is felt more sharply in Luxembourg than in bigger countries." }
        ],
        links: { studySections: [{ module: "module3", index: 5 }, { module: "module3", index: 8 }], questionsModule: 3 }
    },
    {
        id: "sc_constitution_2023",
        title: "The 2023 constitutional revision",
        icon: "📖",
        module: 2,
        relatedChapters: ["ch6"],
        premise: "The 1868 Constitution had been amended dozens of times, but never rewritten. In 2023 that changed. Four separate constitutional laws entered into force between 1 July 2023 and 1 January 2024. What actually changed, and what stayed the same?",
        beats: [
            { q: "Why now?", a: "The 1868 text had become a patchwork. Amendments piled on for 155 years. A comprehensive revision — proposed in 2009, refined over 14 years — was finally approved. Parliament used the double-vote procedure with a Council of State dispensation." },
            { q: "The four new chapters (in force 2023–2024)", a: "The revision reorganised the Constitution into four thematic laws: on fundamental rights (July 2023), on the Grand Duke (October 2023), on the Chamber of Deputies + Council of State (October 2023), and on justice (January 2024). Same fundamental text — much clearer structure." },
            { q: "Fundamental rights: what's new", a: "Explicit recognition of human dignity, sustainable development, animal welfare, and the rights of the child. Right to physical and mental integrity. Right to housing (as a state objective). Explicit protection of personal data. It codifies rights that were already recognised by case law but had no constitutional anchor." },
            { q: "The Grand Duke: fewer powers, more clarity", a: "The 2008 amendment that removed 'sanctioning' from the Grand Duke's role (after the euthanasia refusal) was consolidated. The Grand Duke now only promulgates laws — no discretion. He remains inviolable. Every act still requires ministerial countersignature. The succession rules are made gender-neutral." },
            { q: "Chamber and Council of State", a: "The 60-seat Chamber and its 5-year term stay. The Council of State's role is more explicitly written: mandatory opinion on legislation, suspensive veto on the second vote. New: MPs now have an explicit right of inquiry (parliamentary investigations). Rules on incompatibility clarified." },
            { q: "What did NOT change", a: "Luxembourg is still a parliamentary democracy and a constitutional monarchy. Still 60 MPs, still 4 constituencies (South 23 / Centre 21 / North 9 / East 7), still compulsory voting, still 5-year terms. The Constitutional Court is still 9 members with no direct citizen petition. The revisions modernised the text — they didn't reinvent the state." }
        ],
        links: { studySections: [{ module: "module2", index: 0 }, { module: "module1", index: 3 }], questionsModule: 2 }
    },
    {
        id: "sc_ecsc_founding",
        title: "Why Luxembourg City hosts the Court of Justice",
        icon: "🏛️",
        module: 3,
        relatedChapters: ["ch5"],
        premise: "You visit the Kirchberg plateau on the northeast edge of Luxembourg City. Half of it is EU institutions. Why here? Why not Brussels or Strasbourg?",
        beats: [
            { q: "The ECSC founding", a: "In 1951 the Treaty of Paris created the European Coal and Steel Community — the seed of the EU. Six founding members: France, West Germany, Italy, Belgium, Netherlands, Luxembourg. As they set up the institutions in 1952, they had to place them somewhere." },
            { q: "The provisional decision", a: "The founders couldn't agree on ONE capital. Brussels, Strasbourg, and Luxembourg City all fought for it. As a compromise, Luxembourg City became the seat of the ECSC's High Authority — 'provisionally'. Provisional lasted forever." },
            { q: "The Court of Justice", a: "The Court of Justice of the ECSC was based in Luxembourg from 1952. When it evolved into the Court of Justice of the EEC (1958) and then the Court of Justice of the EU (2009), it stayed. Today it has about 2,600 staff on Kirchberg." },
            { q: "The full list of EU institutions in Luxembourg", a: "Court of Justice of the EU (CJEU), General Court, European Court of Auditors, European Investment Bank, Eurostat, Publications Office of the EU, General Secretariat of the European Parliament, European Public Prosecutor's Office, and various agencies. About 15,000 people work for EU institutions here." },
            { q: "The dispersion problem", a: "The EU famously has three 'capitals' — Brussels (Commission, Council), Strasbourg (Parliament plenaries), Luxembourg City (secretariats, Court, Auditors). This costs about 100 million euros a year in travel, but every treaty change requires unanimity to touch — and none of the three cities will agree to lose its share." },
            { q: "Kirchberg today", a: "The plateau was developed from 1963 as the 'European quarter'. The Court's building is a striking golden-tinted tower. Nearby: the Philharmonie, the modern art museum MUDAM, and the biggest concentration of glass-and-steel architecture in the country." }
        ],
        links: { studySections: [{ module: "module3", index: 7 }, { module: "module3", index: 8 }], questionsModule: 3 }
    }
];

const journey = [
    {
        id: "j1",
        title: "The country you're joining",
        icon: "🗺️",
        subtitle: "A quick portrait before we dive in",
        content: [
            { label: "Official name", value: "Grand Duchy of Luxembourg" },
            { label: "Area", value: "2,586 km² (smaller than Rhode Island)" },
            { label: "Population", value: "~672,000 (47% foreign nationals from 160+ countries)" },
            { label: "Head of state", value: "Grand Duke Henri (since 7 October 2000)" },
            { label: "Independence", value: "19 April 1839 (Treaty of London)" },
            { label: "Constitution", value: "1868 (fourth, still in force, heavily amended)" },
            { label: "Languages", value: "Luxembourgish (national), French (legislation), German (administrative)" },
            { label: "National Day", value: "23 June" },
            { label: "Anthem", value: '"Ons Heemecht" (1859)' },
            { label: "Flag", value: "Red, white, sky-blue (horizontal bands)" }
        ],
        followUp: "This is what the exam will test. But the country behind these facts is more interesting — that's what the story mode will show you."
    },
    {
        id: "j2",
        title: "How they got here",
        icon: "⏳",
        subtitle: "1,062 years in one paragraph",
        content: [
            "In 963 a count named Siegfried bought a hilltop ruin and called it Lucilinburhuc — 'small castle'. His descendants became emperors. From 1443 the Duchy was passed around Europe (Burgundy, Spain, France, Austria) for 372 years without sovereignty. In 1815 the Congress of Vienna drew Luxembourg onto the map again. 1839 made it independent. 1848 gave it its first constitution. 1867 dismantled its famous fortress and made it permanently neutral. 1890 gave it its own royal family. In 1914 and 1940 Germany invaded. Both times Luxembourg survived. In 1945 it gave up neutrality and became a founding member of the UN, NATO, ECSC, and the EU. Today, more than 47% of its residents are foreign nationals — including you."
        ],
        followUp: "The story mode goes chapter by chapter. Six chapters, 1,062 years."
    },
    {
        id: "j3",
        title: "How it's governed",
        icon: "🏛️",
        subtitle: "The institutions that will shape your daily life",
        content: [
            "**Grand Duke** — Head of state, inviolable, but every act must be countersigned by a minister.",
            "**Chamber of Deputies** — 60 MPs, elected every 5 years, from 4 constituencies. Voting is compulsory.",
            "**Council of State** — 21 members. Advises on all legislation. Has a suspensive veto (can delay, not block).",
            "**Government** — Prime Minister + ministers. Politically answerable to Parliament.",
            "**Constitutional Court** — 9 members. Rules on constitutionality — but only when referred by other courts (no direct citizen petitions).",
            "**Municipalities** — Luxembourg's only political subdivision. ~100 of them. 6-year council terms. Foreigners can vote municipally after 5 years."
        ],
        followUp: "Scenario mode walks you through what happens when the government makes a law — or when you want to vote."
    },
    {
        id: "j4",
        title: "What protects you",
        icon: "🛡️",
        subtitle: "The rights framework",
        content: [
            "**First-generation rights** (civil & political) — freedom of expression, assembly, religion; right to a fair trial; presumption of innocence.",
            "**Second-generation rights** (social & economic) — work, social security, health protection, education, housing.",
            "**Constitutional objectives** — environment, sustainable development, natural resources.",
            "**Where they come from** — the 1789 Declaration of Rights, the 1948 Universal Declaration, the 1951 European Convention (Council of Europe), the 2000 EU Charter, and Luxembourg's own Constitution.",
            "**Where you go if violated** — Luxembourg courts first. Then the European Court of Human Rights in Strasbourg (for Convention rights). Or the Court of Justice of the EU in Luxembourg City (for EU-law questions)."
        ],
        followUp: "Scenario mode walks through what happens if you're arrested at 3 a.m."
    }
];

// Consolidated app content — exposed for the SPA layer.
const APP_CONTENT = {
    studyContent,
    questions,
    flashcards,
    timeline,
    chapters,
    figures,
    scenarios,
    journey,
    meta: {
        totalQuestions: questions.length,
        totalFlashcards: flashcards.length,
        totalChapters: chapters.length,
        totalScenarios: scenarios.length,
        exam: {
            questionsOnExam: 40,
            passMark: 28,
            passPct: 70,
            durationMinutes: 60,
            mix: { module1: 10, module2: 20, module3: 10 },
            venue: "Esch-Belval",
            cost: "Free"
        }
    }
};
