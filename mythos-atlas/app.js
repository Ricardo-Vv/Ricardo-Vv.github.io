const people=[
["chaos","卡俄斯","Chaos","origin",78,368,"最初的深渊","赫西俄德的叙事从卡俄斯开始。它像尚未分化的深渊，是宇宙故事的起点。","chapter-1",1,0,"Χ"],
["gaia","盖娅","Gaia","origin",205,252,"大地的原初女神","大地成为众神与万物的根基，并从自身生出天空乌拉诺斯。","chapter-1",1,1,"Γ"],
["tartarus","塔耳塔洛斯","Tartarus","origin",205,435,"最深处的冥府深渊","在大地之下的幽深所在，也是原初时代便显现的宇宙力量之一。","chapter-1",1,2,"Τ"],
["eros","厄洛斯","Eros","origin",205,550,"使万物相互吸引的力量","厄洛斯让生长、结合与繁衍成为可能，连接着神话的生命力。","chapter-1",1,3,"Ε"],
["uranus","乌拉诺斯","Ouranos","origin",345,185,"星空与天空之神","盖娅生出的天空，与她结合后成为泰坦一代的父辈；他又因恐惧孩子而压迫他们。","chapter-2",1,4,"Ο"],
["cronus","克洛诺斯","Cronus","titan",412,340,"被预言击败的泰坦王","乌拉诺斯与盖娅之子，瑞亚的伴侣。他推翻父亲后又吞下自己的孩子，最终被宙斯推翻。","chapter-2",1,5,"Κ"],
["rhea","瑞亚","Rhea","titan",412,444,"奥林匹斯六兄妹的母亲","泰坦女神，克洛诺斯的伴侣。她藏起最小的儿子宙斯，以石头替换襁褓，让下一代王者活了下来。","chapter-2",1,6,"Ρ"],
["iapetus","伊阿珀托斯","Iapetus","titan",412,580,"泰坦，普罗米修斯之父","泰坦一族的重要成员，也是普罗米修斯的父亲，让盗火故事与更早的神王家谱相连。","chapter-3",1,7,"Ι"],
["prometheus","普罗米修斯","Prometheus","titan",535,688,"盗火者，凡人的保护者","伊阿珀托斯之子。他把火带给人类，触犯宙斯的安排，因而被锁在高加索山。","chapter-3",1,8,"Π"],
["cyclopes","独眼巨人","Cyclopes","titan",555,785,"为宙斯锻造雷霆的匠者","宙斯释放他们后，独眼巨人为他锻造雷霆，也为波塞冬与哈得斯打造神力象征。","chapter-3",1,9,"◉"],
["zeus","宙斯","Zeus","olympian",680,340,"雷霆之神，奥林匹斯之王","瑞亚与克洛诺斯最小的孩子。他逃过父亲吞噬，带领兄弟姊妹战胜泰坦，成为天空与秩序的统治者。","chapter-3",1,10,"Ζ"],
["hera","赫拉","Hera","olympian",674,220,"婚姻与王权的女神","宙斯的姊妹与妻子，奥林匹斯的王后。她与宙斯共享王权，却也因宙斯的情事而与其子女冲突。","chapter-4",1,11,"Η"],
["poseidon","波塞冬","Poseidon","olympian",680,465,"海洋与地震之神","克洛诺斯与瑞亚之子，宙斯的兄弟。分配世界时他得到海洋；在《奥德赛》中阻挠奥德修斯归乡。","chapter-4",1,12,"Ψ"],
["hades","哈得斯","Hades","olympian",680,650,"冥界的统治者","宙斯的兄长。分配世界时他得到冥府；他迎娶珀耳塞福涅，成为母女往返故事的一部分。","chapter-5",1,13,"Α"],
["demeter","得墨忒耳","Demeter","olympian",680,555,"谷物与丰收的女神","珀耳塞福涅的母亲。女儿失踪时，她让土地拒绝生长，迫使众神正视母女分离的代价。","chapter-5",1,14,"Δ"],
["hestia","赫斯提亚","Hestia","olympian",810,730,"炉火与家宅的守护神","克洛诺斯与瑞亚最年长的女儿，守护家庭炉火与城邦公共火焰，是神族安静的中心。","chapter-4",1,15,"Η"],
["metis","墨提斯","Metis","olympian",595,110,"智慧与谋略的女神","她的名字意味着深谋远虑。预言说她的孩子会超过父亲，宙斯吞下怀孕的墨提斯，雅典娜随后诞生。","chapter-4",2,0,"Μ"],
["athena","雅典娜","Athena","olympian",870,275,"智慧、工艺与战略的女神","宙斯与墨提斯之女，从父亲头颅中出生。她在特洛伊战争中偏向希腊一方，也帮助奥德修斯归乡。","chapter-4",2,1,"Α"],
["leto","勒托","Leto","olympian",860,125,"阿波罗与阿尔忒弥斯之母","提坦之后，宙斯的伴侣。怀孕时遭赫拉驱逐，最终在提洛岛生下孪生的阿波罗与阿尔忒弥斯。","chapter-4",2,2,"Λ"],
["apollo","阿波罗","Apollo","olympian",1018,135,"光明、音乐与预言之神","宙斯与勒托之子，阿尔忒弥斯的孪生兄长。在特洛伊战争中，他支持特洛伊人并保护赫克托耳。","chapter-4",2,3,"Α"],
["artemis","阿尔忒弥斯","Artemis","olympian",1168,112,"狩猎与荒野的女神","勒托与宙斯的女儿，阿波罗的孪生妹妹。她守护荒野与年轻生命。","chapter-4",2,4,"Α"],
["maia","迈亚","Maia","olympian",970,218,"赫尔墨斯之母","宁芙之一，宙斯的伴侣。她在洞穴中生下敏捷而机智的赫尔墨斯。","chapter-4",2,5,"Μ"],
["hermes","赫尔墨斯","Hermes","olympian",1065,255,"诸神的信使与旅人的守护者","宙斯与迈亚之子，神、人和冥府间的传信者。他在《奥德赛》中教奥德修斯避开喀耳刻的魔法。","chapter-4",2,6,"Η"],
["ares","阿瑞斯","Ares","olympian",845,390,"战争与战斗之神","宙斯与赫拉之子，代表战场上狂烈的一面。特洛伊战争中，他的立场也会在神祇阵营间摇摆。","chapter-4",2,7,"Α"],
["hephaestus","赫淮斯托斯","Hephaestus","olympian",991,445,"火与锻造之神","奥林匹斯的工匠神，为诸神锻造武器和器物。关于他的父母与出生版本并不一致。","chapter-4",2,8,"Η"],
["aphrodite","阿佛洛狄忒","Aphrodite","olympian",1080,354,"爱与美的女神","赫西俄德说她从海沫中升起，荷马则称她是宙斯与狄俄涅之女。她把金苹果的承诺给了帕里斯。","chapter-4",2,9,"Α"],
["dione","狄俄涅","Dione","olympian",920,424,"荷马传统中的阿佛洛狄忒之母","在《伊利亚特》的家谱中，她与宙斯生下阿佛洛狄忒；赫西俄德的海沫起源则没有她。","chapter-4",2,10,"Δ"],
["persephone","珀耳塞福涅","Persephone","olympian",820,575,"冥后，丰饶与季节往返的女神","得墨忒耳与宙斯之女。她在哈得斯的冥界与母亲身边往返，让失去与重逢成为一年循环的神话。","chapter-5",2,11,"Π"],
["semele","塞墨勒","Semele","olympian",1082,515,"狄俄倪索斯之母","底比斯公主，宙斯的凡人伴侣。她与宙斯所生的儿子狄俄倪索斯后来成为酒与戏剧之神。","chapter-4",2,12,"Σ"],
["dionysus","狄俄倪索斯","Dionysus","olympian",1175,560,"酒、戏剧与狂喜之神","宙斯与塞墨勒之子。他连接神圣与凡俗、秩序与狂喜，在一些传统中成为奥林匹斯十二神之一。","chapter-4",2,13,"Δ"],
["alcmene","阿尔克墨涅","Alcmene","mortal",936,635,"赫拉克勒斯的凡人母亲","宙斯与阿尔克墨涅的相会生下赫拉克勒斯，也引发赫拉的敌意。","chapter-6",2,14,"Α"],
["heracles","赫拉克勒斯","Heracles","mortal",1070,710,"完成十二劳役的英雄","宙斯与凡人阿尔克墨涅之子。面对赫拉带来的苦难，他完成十二项劳役，成为古希腊最受敬仰的英雄之一。","chapter-6",2,15,"Η"],
["agamemnon","阿伽门农","Agamemnon","troy",1260,620,"希腊联军的统帅","迈锡尼王、墨涅拉俄斯的兄长。在《伊利亚特》开篇，他与阿喀琉斯因战利品布里塞伊斯发生冲突。","chapter-8",4,0,2,2,"Α"],
["briseis","布里塞伊斯","Briseis","troy",1410,660,"引发争端的特洛伊俘虏","她被阿伽门农从阿喀琉斯身边夺走，成为《伊利亚特》开端争端的焦点。诗歌也让她拥有哀悼与发声的片刻。","chapter-8",4,1,2,2,"Β"],
["patroclus","帕特罗克洛斯","Patroclus","troy",1370,560,"阿喀琉斯的亲密战友","他披上阿喀琉斯的盔甲重返战场，最终死于赫克托耳之手。他的死让阿喀琉斯重新拿起武器。","chapter-8",4,2,2,2,"Π"],
["eris","厄里斯","Eris","troy",1270,65,"纷争女神","被珀琉斯与忒提斯的婚宴排除后，她把写有“献给最美者”的金苹果投入宴席，开启争夺与战争。","chapter-7",3,0,"Ε"],
["peleus","佩琉斯","Peleus","troy",1310,176,"凡人英雄，忒提斯的丈夫","他与海中女神忒提斯成婚。他们的婚宴因厄里斯的金苹果成为特洛伊战争的远因。","chapter-7",3,1,"Π"],
["thetis","忒提斯","Thetis","troy",1280,306,"海中女神，阿喀琉斯之母","海中女神，佩琉斯的妻子。她为儿子阿喀琉斯奔走求助，也明白英雄荣耀伴随短暂生命。","chapter-8",3,2,"Θ"],
["achilles","阿喀琉斯","Achilles","troy",1410,330,"希腊军中最强的英雄","佩琉斯与忒提斯之子。《伊利亚特》写他的愤怒如何改变战局，又如何在普里阿摩斯的哀求前消散。","chapter-8",3,3,"Α"],
["helen","海伦","Helen","troy",1430,165,"斯巴达王后，特洛伊战争的核心人物","她在斯巴达成为墨涅拉俄斯的妻子。帕里斯带她前往特洛伊成为战争导火线；不同版本对她的选择有异说。","chapter-7",3,4,"Η"],
["menelaus","墨涅拉俄斯","Menelaus","troy",1550,215,"斯巴达王，海伦的丈夫","海伦的丈夫与阿伽门农的兄弟。帕里斯带走海伦后，他召集盟军远征特洛伊。","chapter-7",3,5,"Μ"],
["paris","帕里斯","Paris","troy",1320,500,"特洛伊王子，金苹果的裁决者","普里阿摩斯之子。赫拉许诺权力，雅典娜许诺胜利，阿佛洛狄忒许诺爱情；他选择了爱情，也选择战争。","chapter-7",3,6,"Π"],
["priam","普里阿摩斯","Priam","troy",1485,455,"特洛伊的老国王","赫克托耳与帕里斯的父亲。儿子战死后，他亲自进入敌营，向阿喀琉斯请求交还遗体。","chapter-8",3,7,"Π"],
["hector","赫克托耳","Hector","troy",1500,365,"特洛伊的守城英雄","普里阿摩斯之子、安德洛玛刻的丈夫，是特洛伊最重要的守护者。他与阿喀琉斯的对决构成悲剧核心。","chapter-8",3,8,"Η"],
["andromache","安德洛玛刻","Andromache","troy",1535,565,"赫克托耳的妻子","特洛伊王子赫克托耳的妻子。她对丈夫的忧惧，让城墙内的人们也进入英雄史诗的视野。","chapter-8",3,9,"Α"],
["odysseus","奥德修斯","Odysseus","odyssey",1225,720,"智谋过人的漂泊者","伊萨卡的王，《奥德赛》的主人公。他在特洛伊战争后漂泊十年，躲避波塞冬并寻找归途。","chapter-9",3,10,"Ο"],
["penelope","佩涅洛佩","Penelope","odyssey",1400,700,"等待丈夫归来的伊萨卡王后","奥德修斯的妻子，忒勒马科斯的母亲。她用织布与拆布的计谋拖延求婚者，为丈夫守住家园。","chapter-9",3,11,"Π"],
["telemachus","忒勒马科斯","Telemachus","odyssey",1530,790,"奥德修斯与佩涅洛佩之子","父亲久不归来时成长的王子。在雅典娜引导下，他出海寻找消息，也开始守护家园。","chapter-9",3,12,"Τ"],
["polyphemus","波吕斐摩斯","Polyphemus","odyssey",1440,875,"波塞冬之子，独眼巨人","奥德修斯刺瞎他的眼睛后，父亲波塞冬将愤怒转向归乡者，让航程愈发漫长。","chapter-9",3,13,"◉"],
["circe","喀耳刻","Circe","odyssey",1190,850,"会施法的女神与女巫","她把奥德修斯的同伴变作猪，后来又指引他前往冥界。她既是考验，也是旅途中的引路者。","chapter-9",3,14,"Κ"],
["calypso","卡吕普索","Calypso","odyssey",1055,865,"将奥德修斯留在岛上的宁芙","她把奥德修斯留在自己的岛上多年，甚至许诺永生；最终遵从宙斯的命令，让他继续返乡。","chapter-9",3,15,"Κ"],
["typhon","提丰","Typhon","origin",310,730,"盖娅与塔耳塔洛斯所生的百首巨怪","盖娅与塔耳塔洛斯所生，试图挑战宙斯的统治；宙斯以雷霆击败他，把他压回大地深处。","chapter-3",5,2,2,2,"Τ"],
["epimetheus","厄庇米修斯","Epimetheus","titan",520,760,"普罗米修斯的泰坦兄弟","他的名字常被解释为“后知者”。哥哥劝他别收宙斯的礼物，他却接纳了潘多拉。","chapter-3",5,1,2,2,"Ε"],
["pandora","潘多拉","Pandora","mortal",770,805,"诸神造出的第一位女人","宙斯安排诸神造她并送到厄庇米修斯身边。她打开陶坛后，灾厄散入人间；“希望”留在坛中的含义有不同解释。","chapter-3",5,0,2,2,"Π"],
["helios","赫利俄斯","Helios","titan",805,965,"驾驭日车的太阳神","奥德修斯的同伴在忒里那基亚岛杀食他的神牛；赫利俄斯请求宙斯惩罚他们，船队因此覆灭。","chapter-9",6,0,2,2,"Η"],
["sirens","海妖塞壬","Sirens","odyssey",925,965,"以歌声诱惑航海者的海妖","奥德修斯让同伴以蜡封耳，自己被绑在桅杆上，才听过她们的歌而没有跳入海中。","chapter-9",6,1,2,2,"Σ"],
["scylla","斯库拉","Scylla","odyssey",1045,965,"守在海峡岩壁上的多首海怪","她盘踞在狭窄海峡的一侧，奥德修斯的船经过时，她夺走六名同伴。","chapter-9",6,2,2,2,"Σ"],
["charybdis","卡律布狄斯","Charybdis","odyssey",1165,965,"海峡另一侧的吞水漩涡","她与斯库拉隔海相对，吞吐海水形成致命漩涡；船只只能在两种危险间选择航线。","chapter-9",6,3,2,2,"Χ"],
["tiresias","忒瑞西阿斯","Tiresias","odyssey",1285,965,"底比斯的盲眼先知","奥德修斯在冥府向他问路。忒瑞西阿斯警告：不要伤害太阳神赫利俄斯的牛群。","chapter-9",7,0,2,2,"Τ"],
["aeolus","阿伊俄洛斯","Aeolus","odyssey",1405,965,"掌管风的岛主","他把逆风封在皮囊中赠给奥德修斯；同伴误以为袋中是财宝，打开后让归航的船再次被吹远。","chapter-9",7,1,2,2,"Α"],
["nausicaa","瑙西卡","Nausicaa","odyssey",1525,965,"法伊阿基亚王女","她在海岸发现漂流上岸的奥德修斯，给他衣物和指路，让他得到回家的机会。","chapter-9",7,2,2,2,"Ν"],
["alcinous","阿尔基诺俄斯","Alcinous","odyssey",1645,965,"法伊阿基亚人的国王","瑙西卡的父亲。他款待奥德修斯，听完漂泊故事后安排船只，将他送回伊萨卡。","chapter-9",7,3,2,2,"Α"],
["hecate","赫卡忒","Hecate","olympian",930,690,"听见珀耳塞福涅呼救、提灯寻路的女神","她在珀耳塞福涅被带往冥界时听见呼救，又把所闻告诉得墨忒耳；母女重逢后，她成为珀耳塞福涅的同行者，连接大地与冥界。","chapter-5",8,0,1,1,"Η"]
].map(a=>({id:a[0],name:a[1],latin:a[2],group:a[3],x:a[4],y:a[5],role:a[6],bio:a[7],chapter:a[8],portrait:[a[9],a[10],typeof a[11]==="number"?a[11]:4,typeof a[12]==="number"?a[12]:4],symbol:typeof a[11]==="number"?a[13]:a[11]}));

const edges=[
["chaos","gaia","origin","原初出现 · 叙事先后"],["chaos","tartarus","origin","原初出现 · 叙事先后"],["chaos","eros","origin","原初出现 · 叙事先后"],
["gaia","uranus","family","盖娅生出天空"],["gaia","uranus","marriage","母亲与伴侣 · 神话谱系"],["gaia","cronus","family","母子"],["uranus","cronus","family","父子"],["gaia","rhea","family","母女"],["uranus","rhea","family","父女"],["gaia","iapetus","family","母子"],["uranus","iapetus","family","父子"],["cronus","rhea","marriage","婚姻与共治"],
["cronus","zeus","family","父子"],["rhea","zeus","family","母子"],["cronus","hera","family","父女"],["rhea","hera","family","母女"],["cronus","poseidon","family","父子"],["rhea","poseidon","family","母子"],["cronus","hades","family","父子"],["rhea","hades","family","母子"],["cronus","demeter","family","父女"],["rhea","demeter","family","母女"],["cronus","hestia","family","父女"],["rhea","hestia","family","母女"],["iapetus","prometheus","family","父子"],["zeus","cyclopes","alliance","释放与助战"],
["zeus","hera","marriage","婚姻与王权"],["zeus","metis","alliance","智慧女神与宙斯结合"],["zeus","athena","family","父女"],["metis","athena","family","母女"],["zeus","leto","alliance","伴侣"],["leto","apollo","family","母子"],["zeus","apollo","family","父子"],["leto","artemis","family","母女"],["zeus","artemis","family","父女"],["zeus","maia","alliance","伴侣"],["maia","hermes","family","母子"],["zeus","hermes","family","父子"],["hera","ares","family","母子"],["zeus","ares","family","父子"],["hera","hephaestus","family","常见版本中的母子"],["zeus","hephaestus","family","另一传统中的父子"],
["uranus","aphrodite","origin","赫西俄德版本：海沫诞生"],["zeus","dione","alliance","荷马传统中的结合"],["dione","aphrodite","family","荷马版本：母女"],["zeus","aphrodite","family","荷马版本：父女"],["zeus","demeter","alliance","伴侣"],["demeter","persephone","family","母女"],["zeus","persephone","family","父女"],["hades","persephone","marriage","婚配与冥界往返"],["hecate","persephone","alliance","听见她的呼救，并在重逢后成为同行者"],["hecate","demeter","alliance","告诉得墨忒耳自己听见的呼救"],
["zeus","semele","alliance","凡人伴侣"],["semele","dionysus","family","母子"],["zeus","dionysus","family","父子"],["zeus","alcmene","alliance","凡人伴侣"],["alcmene","heracles","family","母子"],["zeus","heracles","family","父子"],["hera","heracles","conflict","赫拉因宙斯的私情敌视赫拉克勒斯"],
["eris","peleus","conflict","金苹果打断婚宴"],["peleus","thetis","marriage","凡人英雄与海中女神成婚"],["peleus","achilles","family","父子"],["thetis","achilles","family","母子"],["aphrodite","paris","alliance","爱情成为裁决承诺"],["zeus","paris","alliance","把金苹果的裁决交给帕里斯"],["hera","paris","conflict","争夺金苹果的落选者"],["athena","paris","conflict","争夺金苹果的落选者"],["paris","helen","conflict","带走海伦的异传"],["helen","menelaus","marriage","原有婚姻"],["priam","paris","family","父子"],["priam","hector","family","父子"],["hector","andromache","marriage","婚姻与共同家园"],["achilles","hector","conflict","特洛伊战场的对手"],["hera","achilles","alliance","偏向希腊军"],["athena","achilles","alliance","偏向希腊军"],["apollo","hector","alliance","支持特洛伊一方"],["aphrodite","helen","alliance","保护海伦与帕里斯"],
["agamemnon","achilles","conflict","联军统帅与英雄的争执"],["agamemnon","briseis","conflict","夺走俘虏引发争端"],["achilles","briseis","alliance","她原由阿喀琉斯保护"],["patroclus","achilles","alliance","亲密战友"],["hector","patroclus","conflict","赫克托耳杀死帕特罗克洛斯"],
["odysseus","penelope","marriage","夫妻与漫长等待"],["odysseus","telemachus","family","父子"],["penelope","telemachus","family","母子"],["poseidon","polyphemus","family","父子"],["odysseus","polyphemus","conflict","刺瞎独眼巨人"],["poseidon","odysseus","conflict","海神阻挠归乡"],["athena","odysseus","alliance","女神帮助归乡"],["circe","odysseus","alliance","相遇、试炼与指引"],["calypso","odysseus","alliance","留居海岛与获准离开"],["hermes","odysseus","alliance","传达神谕并提供解法"],
["gaia","typhon","family","母子：提丰由盖娅所生"],["tartarus","typhon","family","父子：提丰由塔耳塔洛斯所生"],["zeus","typhon","conflict","宙斯以雷霆镇压提丰"],
["iapetus","epimetheus","family","父子"],["prometheus","epimetheus","family","兄弟"],["epimetheus","pandora","marriage","接受宙斯安排的婚配"],["zeus","pandora","conflict","宙斯安排的惩罚性礼物"],["hephaestus","pandora","origin","奉命塑造潘多拉"],["athena","pandora","alliance","为她授予织艺与衣饰"],["prometheus","heracles","alliance","赫拉克勒斯射落恶鹰使他获释"],
["hermes","apollo","alliance","以竖琴换取牛群，兄弟和解"],["hephaestus","aphrodite","marriage","夫妻"],["aphrodite","ares","alliance","私会的情人"],["hephaestus","ares","conflict","以青铜网捕获阿瑞斯"],
["odysseus","sirens","conflict","以计谋通过海妖歌声的考验"],["odysseus","scylla","conflict","船经海峡时失去六名同伴"],["odysseus","charybdis","conflict","在致命漩涡旁冒险通过"],["helios","odysseus","conflict","同伴触犯赫利俄斯的神牛"],["tiresias","odysseus","alliance","预言归途并警告神牛禁忌"],["aeolus","odysseus","alliance","赠送风囊助他归航"],["nausicaa","odysseus","alliance","救助海难后的漂流者"],["alcinous","odysseus","alliance","款待并安排船只送他回家"],["alcinous","nausicaa","family","父女"]
];
const groupNames={origin:"原初与大地后裔 · PRIMEVAL",titan:"泰坦 · THE OLD DYNASTY",olympian:"奥林匹斯 · THE GODS",mortal:"英雄 · THE MORTAL LINE",troy:"特洛伊 · THE WAR",odyssey:"归乡 · THE ODYSSEY"};
const groupOrder=["origin","titan","olympian","mortal","troy","odyssey"],groupX={origin:30,titan:280,olympian:555,mortal:1040,troy:1235,odyssey:1030};
const byId=new Map(people.map(p=>[p.id,p])),svgNS="http://www.w3.org/2000/svg",nodeLayer=document.getElementById("node-layer"),edgeLayer=document.getElementById("edge-layer"),labelLayer=document.getElementById("group-labels");
let selectedId="gaia",activeFilter="all",searchTerm="";
function svg(tag,attrs={}){const el=document.createElementNS(svgNS,tag);for(const [k,v] of Object.entries(attrs))el.setAttribute(k,v);return el}
function makeGraph(){
  document.getElementById("character-count").textContent=String(people.length).padStart(2,"0");
  for(const group of groupOrder){const list=people.filter(p=>p.group===group);if(!list.length)continue;const top=Math.min(...list.map(p=>p.y))-54;const text=svg("text",{x:groupX[group],y:Math.max(26,top),"class":"graph-band"});text.textContent=groupNames[group];labelLayer.appendChild(text);labelLayer.appendChild(svg("line",{x1:groupX[group],y1:Math.max(34,top+9),x2:Math.min(1660,groupX[group]+165),y2:Math.max(34,top+9),"class":"graph-band-rule"}))}
  for(const [a,b,type,label] of edges){const p=byId.get(a),q=byId.get(b);if(!p||!q)continue;const dx=q.x-p.x,dy=q.y-p.y,len=Math.hypot(dx,dy)||1;const line=svg("line",{x1:p.x+dx/len*16,y1:p.y+dy/len*16,x2:q.x-dx/len*16,y2:q.y-dy/len*16,"class":"graph-edge "+type,"data-a":a,"data-b":b});const title=svg("title");title.textContent=label;line.appendChild(title);edgeLayer.appendChild(line)}
  for(const p of people){const g=svg("g",{transform:"translate("+p.x+" "+p.y+")","class":"graph-node "+p.group+"-color","data-id":p.id,tabindex:"0",role:"button","aria-label":p.name+"，"+p.role});const circle=svg("circle",{r:"13","class":"node-dot"});const title=svg("title");title.textContent=p.name+" · "+p.latin;circle.appendChild(title);g.appendChild(circle);const name=svg("text",{y:"32","class":"node-name"});name.textContent=p.name;g.appendChild(name);const latin=svg("text",{y:"45","class":"node-latin"});latin.textContent=p.latin;g.appendChild(latin);g.addEventListener("click",()=>selectPerson(p.id));g.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();selectPerson(p.id)}});nodeLayer.appendChild(g)}
  selectPerson(selectedId,false)
}
function neighbors(id){const out=[];for(const [a,b,type,label] of edges){if(a===id)out.push({person:byId.get(b),type,label});else if(b===id)out.push({person:byId.get(a),type,label})}return out.filter(x=>x.person)}
function updateGraph(){
  const near=new Set(neighbors(selectedId).map(n=>n.person.id)),q=searchTerm.trim().toLocaleLowerCase();
  for(const node of nodeLayer.querySelectorAll(".graph-node")){const p=byId.get(node.dataset.id),match=!q||[p.name,p.latin,p.role].some(s=>s.toLocaleLowerCase().includes(q)),filterMatch=activeFilter==="all"||p.group===activeFilter;node.classList.toggle("is-selected",p.id===selectedId);node.classList.toggle("is-match",!!q&&match);node.classList.toggle("is-dimmed",!filterMatch||(!!selectedId&&p.id!==selectedId&&!near.has(p.id))||(!!q&&!match))}
  for(const edge of edgeLayer.querySelectorAll(".graph-edge")){const related=edge.dataset.a===selectedId||edge.dataset.b===selectedId,visible=activeFilter==="all"||byId.get(edge.dataset.a).group===activeFilter||byId.get(edge.dataset.b).group===activeFilter,searchVisible=!q||[byId.get(edge.dataset.a),byId.get(edge.dataset.b)].some(p=>[p.name,p.latin,p.role].some(s=>s.toLocaleLowerCase().includes(q)));edge.classList.toggle("is-lit",related);edge.classList.toggle("is-dimmed",!visible||!related||!searchVisible)}
}
function selectPerson(id,scrollToMap=false){
  const p=byId.get(id);if(!p)return;selectedId=id;
  const labels={origin:"ORIGIN · PRIMEVAL",titan:"TITAN · THE OLD DYNASTY",olympian:"OLYMPUS · THE GODS",mortal:"HERO · THE MORTAL LINE",troy:"TROY · THE WAR",odyssey:"ODYSSEY · THE WAY HOME"};
  const portrait=document.getElementById("sheet-portrait"),cols=p.portrait[2]||4,rows=p.portrait[3]||4,col=p.portrait[1]%cols,row=Math.floor(p.portrait[1]/cols),ext=p.portrait[0]===8?"jpg":"png";
  portrait.style.backgroundImage='url("./assets/portraits-'+String(p.portrait[0]).padStart(2,"0")+'.'+ext+'")';portrait.style.backgroundSize=(cols*100)+"% "+(rows*100)+"%";portrait.style.setProperty("--portrait-x",(cols>1?col*100/(cols-1):0)+"%");portrait.style.setProperty("--portrait-y",(rows>1?row*100/(rows-1):0)+"%");portrait.setAttribute("aria-label",p.name+"人物立绘");
  document.getElementById("sheet-emblem").textContent=p.symbol||"✦";document.getElementById("sheet-category").textContent=labels[p.group]||"MYTH";document.getElementById("sheet-name").textContent=p.name;document.getElementById("sheet-greek").textContent=p.latin;document.getElementById("sheet-role").textContent=p.role;document.getElementById("sheet-bio").textContent=p.bio;
  const related=document.getElementById("sheet-related");related.replaceChildren();const rel=neighbors(id);
  if(!rel.length){const span=document.createElement("span");span.textContent="故事起点";span.className="related-person";related.appendChild(span)}
  else for(const r of rel.slice(0,7)){const b=document.createElement("button");b.className="related-person";b.type="button";b.textContent=r.person.name;b.title=r.label;b.addEventListener("click",()=>selectPerson(r.person.id));related.appendChild(b)}
  document.getElementById("sheet-story-link").href="#"+p.chapter;updateGraph();if(scrollToMap)document.getElementById("relationship-map").scrollIntoView({behavior:"smooth",block:"start"})
}
const search=document.getElementById("person-search"),searchResults=document.getElementById("search-results");
function drawSuggestions(){const q=searchTerm.trim().toLocaleLowerCase();searchResults.replaceChildren();if(!q){searchResults.hidden=true;return}const found=people.filter(p=>[p.name,p.latin,p.role].some(s=>s.toLocaleLowerCase().includes(q))).slice(0,8);for(const p of found){const b=document.createElement("button");b.type="button";b.setAttribute("role","option");const n=document.createElement("span"),m=document.createElement("small");n.textContent=p.name;m.textContent=p.role;b.append(n,m);b.addEventListener("click",()=>{search.value=p.name;searchTerm=p.name;searchResults.hidden=true;selectPerson(p.id);document.getElementById("person-sheet").scrollIntoView({behavior:"smooth",block:"center"})});searchResults.appendChild(b)}searchResults.hidden=found.length===0}
search.addEventListener("input",()=>{searchTerm=search.value;drawSuggestions();updateGraph()});
search.addEventListener("keydown",e=>{if(e.key==="Enter"){const q=searchTerm.trim().toLocaleLowerCase(),p=people.find(x=>[x.name,x.latin].some(s=>s.toLocaleLowerCase().includes(q)));if(p){e.preventDefault();searchResults.hidden=true;selectPerson(p.id);document.getElementById("person-sheet").scrollIntoView({behavior:"smooth",block:"center"})}}if(e.key==="Escape"){search.value="";searchTerm="";searchResults.hidden=true;updateGraph()}});
document.addEventListener("click",e=>{if(!e.target.closest(".search-box"))searchResults.hidden=true});
document.getElementById("filter-buttons").addEventListener("click",e=>{const b=e.target.closest("button[data-filter]");if(!b)return;activeFilter=b.dataset.filter;for(const x of document.querySelectorAll(".filter-chip")){const active=x===b;x.classList.toggle("is-active",active);x.setAttribute("aria-pressed",String(active))}updateGraph()});
document.querySelectorAll("[data-person]").forEach(el=>el.addEventListener("click",()=>selectPerson(el.dataset.person,true)));
document.getElementById("sheet-story-link").addEventListener("click",e=>{const p=byId.get(selectedId),chapter=p&&document.getElementById(p.chapter);if(chapter){e.preventDefault();chapter.scrollIntoView({behavior:"smooth",block:"start"})}});
document.addEventListener("keydown",e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="k"){e.preventDefault();search.focus()}});
const chapters=[...document.querySelectorAll(".chapter")];
function updateProgress(){const total=document.documentElement.scrollHeight-innerHeight,progress=total>0?Math.min(100,Math.max(0,scrollY/total*100)):0;document.getElementById("progress-bar").style.width=progress+"%";const current=chapters.reduce((n,c,i)=>c.getBoundingClientRect().top<innerHeight*.56?i+1:n,1);document.getElementById("progress-label").textContent=String(current).padStart(2,"0")+" / 09"}
window.addEventListener("scroll",updateProgress,{passive:true});window.addEventListener("resize",updateProgress);makeGraph();updateProgress();
