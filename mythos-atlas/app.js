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
["hecate","赫卡忒","Hecate","olympian",930,690,"听见珀耳塞福涅呼救、提灯寻路的女神","她在珀耳塞福涅被带往冥界时听见呼救，又把所闻告诉得墨忒耳；母女重逢后，她成为珀耳塞福涅的同行者，连接大地与冥界。","chapter-5",8,0,1,1,"Η"],
["perseus","珀耳修斯","Perseus","side",110,1125,"斩下美杜莎首级、救出安德洛墨达的英雄","为了保护母亲达娜厄，他接受波吕得克忒斯的刁难远赴戈耳工之地；借雅典娜的盾面避开美杜莎的目光，后来又救下被缚在海边的安德洛墨达。","side-perseus",9,0,2,2,"Π"],
["danae","达娜厄","Danae","side",290,1125,"阿尔戈斯公主，珀耳修斯之母","阿克里西俄斯听到外孙将杀死自己的预言后，把她囚禁起来；宙斯来到她身边，她生下珀耳修斯。儿子长大后，母子又一同面对国王波吕得克忒斯的威胁。","side-perseus",9,1,2,2,"Δ"],
["acrisios","阿克里西俄斯","Acrisius","side",470,1125,"阿尔戈斯国王，达娜厄之父","神谕说他会死于外孙之手，他便试图隔绝女儿和孩子；多年后，珀耳修斯在一场竞技中误伤他，预言以意外而非谋杀应验。","side-perseus",9,2,2,2,"Α"],
["polydectes","波吕得克忒斯","Polydectes","side",650,1125,"塞里福斯岛的国王","他想迎娶达娜厄，却把珀耳修斯视为阻碍，便借口索要美杜莎的头派英雄远行；珀耳修斯带回战利品后，他再也不能强迫母子。","side-perseus",9,3,2,2,"Π"],
["medusa","美杜莎","Medusa","side",110,1270,"目光能使人石化的戈耳工","珀耳修斯不直视她，而从盾面反光中辨认她的位置。她既是恐怖的怪物，也是被英雄故事固定成“必须被斩杀”的女性形象。","side-perseus",10,0,2,2,"Μ"],
["andromeda","安德洛墨达","Andromeda","side",290,1270,"被缚在海岸、等待牺牲的埃塞俄比亚公主","母亲的夸口招来海神的惩罚，她被锁在礁石上献给海怪；珀耳修斯杀退怪物救下她，两人随后结为伴侣。","side-perseus",10,1,2,2,"Α"],
["cepheus","刻甫斯","Cepheus","side",470,1270,"埃塞俄比亚国王，安德洛墨达之父","海患逼近王国时，他与王后不得不把女儿送到海边；珀耳修斯出手后，国王兑现承诺，让救援者带走安德洛墨达。","side-perseus",10,2,2,2,"Κ"],
["cassiopeia","卡西俄珀亚","Cassiopeia","side",650,1270,"埃塞俄比亚王后，安德洛墨达之母","她夸耀女儿胜过海中女神，触怒波塞冬，引来海怪与灾祸。她的骄傲把安德洛墨达推上祭台，也把珀耳修斯带到海岸。","side-perseus",10,3,2,2,"Κ"],
["theseus","忒修斯","Theseus","side",1000,1125,"穿越迷宫、杀死弥诺陶洛斯的雅典英雄","他从父亲留下的剑认出身世，随后自愿随贡船前往克里特。阿里阿德涅给他线团，他杀死迷宫中的弥诺陶洛斯，却没能把一路帮他的公主带回家。","side-theseus",11,0,2,2,"Θ"],
["ariadne","阿里阿德涅","Ariadne","side",1180,1125,"克里特公主，给忒修斯迷宫线团的人","她违逆父亲米诺斯，交给忒修斯线团和逃出迷宫的办法。忒修斯带她离开克里特，却在纳克索斯留下她；不同传统对她后来与狄俄倪索斯的相遇各有写法。","side-theseus",11,1,2,2,"Α"],
["aegeus","埃勾斯","Aegeus","side",1360,1125,"雅典国王，忒修斯之父","他让儿子归航时换上白帆作为平安信号。忒修斯忘了换帆，埃勾斯远远看见黑帆，以为儿子死了，悲痛地坠海。","side-theseus",11,2,2,2,"Α"],
["minos","米诺斯","Minos","side",1540,1125,"克里特国王，迷宫与贡船的统治者","他把弥诺陶洛斯关在代达罗斯设计的迷宫里，并要求雅典定期送来年轻人作祭品；女儿阿里阿德涅最终帮助忒修斯破坏这套秩序。","side-theseus",11,3,2,2,"Μ"],
["minotaur","弥诺陶洛斯","Minotaur","side",1180,1270,"迷宫深处的牛首怪物","他被锁在米诺斯的迷宫里，以雅典送来的贡品为食。忒修斯循着阿里阿德涅留下的线找到他，并徒手将他杀死。","side-theseus",12,0,2,2,"Μ"],
["orpheus","奥耳甫斯","Orpheus","side",100,1410,"以竖琴和歌声感动万物的诗人","他随阿尔戈号远征，也曾为亡妻欧律狄刻进入冥界。他的歌声打动哈得斯与珀耳塞福涅，换来一次带她回到阳光下的机会。","side-orpheus",12,1,2,2,"Ο"],
["eurydice","欧律狄刻","Eurydice","side",280,1410,"奥耳甫斯的妻子，未能走出冥界的宁芙","她死后，奥耳甫斯追到冥界求她回来。两人几乎走到出口时，他回头确认她是否跟上；那一眼让她再次退回亡者之地。","side-orpheus",12,2,2,2,"Ε"],
["jason","伊阿宋","Jason","side",500,1410,"率领阿尔戈英雄寻找金羊毛的队长","叔父珀利阿斯把他派往科尔基斯，原想让他死在远方；伊阿宋靠同伴和美狄亚的帮助取回金羊毛，返乡后的权力争斗却仍把他推向流亡。","side-argos",12,3,2,2,"Ι"],
["medea","美狄亚","Medea","side",680,1410,"科尔基斯公主、女术士，伊阿宋的盟友与妻子","她为爱情背离父亲埃厄忒斯，以药草和计谋帮伊阿宋夺得金羊毛。后来伊阿宋另娶王家新娘；欧里庇得斯的悲剧把这段盟誓破裂写成家庭毁灭。","side-argos",13,0,2,2,"Μ"],
["pelias","珀利阿斯","Pelias","side",860,1410,"伊阿宋的叔父，夺走伊奥尔科斯王位的国王","听见神谕警告后，他把穿单只凉鞋回来的伊阿宋派去取金羊毛；在某些后续版本里，美狄亚又诱使他的女儿们亲手毁掉父亲。","side-argos",13,1,2,2,"Π"],
["aeetes","埃厄忒斯","Aeetes","side",1040,1410,"科尔基斯国王、金羊毛的守护者","他不肯把金羊毛交给陌生船队，要求伊阿宋先驯服喷火的铜蹄牛、播种龙牙并战胜武装战士；女儿美狄亚暗中替英雄找到活下来的办法。","side-argos",13,2,2,2,"Α"],
["oedipus","俄狄浦斯","Oedipus","side",1210,1410,"解开斯芬克斯谜语的底比斯国王","他为逃避神谕而离开养父母，却在十字路口杀了生父，继而解开斯芬克斯之谜、娶了生母。瘟疫逼他追查凶手，答案最终揭开了自己的身世。","side-thebes",13,3,2,2,"Ο"],
["jocasta","伊俄卡斯忒","Jocasta","side",1370,1410,"底比斯王后，俄狄浦斯的母亲与妻子","她与拉伊俄斯试图摆脱一则关于儿子的神谕；多年后，儿子在不知情时娶了她。随着旧王遇害真相被查明，伊俄卡斯忒先于俄狄浦斯看见了命运的闭环。","side-thebes",14,0,2,2,"Ι"],
["laius","拉伊俄斯","Laius","side",1530,1410,"底比斯国王，俄狄浦斯的父亲","神谕预言他会死在儿子手里，他便命人遗弃婴儿；在十字路口，他与长大成人却不知身世的俄狄浦斯冲突，父子因此互不相认地相杀。","side-thebes",14,1,2,2,"Λ"],
["sphinx","斯芬克斯","Sphinx","side",1370,1545,"堵住底比斯道路、以谜语害人的怪物","她守在城外向行人提出谜语，答错者便被吞噬。俄狄浦斯说出答案后，她坠落身亡，城市获救，他也因此进入王宫和神谕的陷阱。","side-thebes",14,2,2,2,"Σ"],
["antigone","安提戈涅","Antigone","side",1530,1545,"俄狄浦斯的女儿，在流亡中陪伴父亲","她在父亲被逐出底比斯后搀扶、引领他穿越异乡；俄狄浦斯在科罗诺斯获得安息后，她又回城面对兄弟的葬礼与克瑞翁的禁令。","side-thebes",14,3,2,2,"Α"],
["aethra","爱特拉","Aethra","side",830,1125,"忒修斯的母亲，为儿子留下父亲的剑与凉鞋","埃勾斯离开特罗曾时，把剑与凉鞋藏在巨石下，托她等孩子长大后取出信物；忒修斯因此得以认出自己的身世。","side-theseus",15,0,2,2,"Α"],
["creon","克瑞翁","Creon","side",1020,1545,"底比斯王，伊俄卡斯忒的兄弟","俄狄浦斯离开后，他重新掌权；两位王子死后，他准许一人安葬、禁止另一人受葬礼，引发安提戈涅的抗命。","side-thebes",15,1,2,2,"Κ"],
["eteocles","厄忒俄克勒斯","Eteocles","side",970,1680,"俄狄浦斯之子，与波吕尼刻斯争夺底比斯王位","兄弟约定轮流统治，却因王位冲突而彼此交战；在《安提戈涅》的戏剧开场前，两人已经同归于尽。","side-thebes",15,2,2,2,"Ε"],
["polyneices","波吕尼刻斯","Polyneices","side",1180,1680,"俄狄浦斯之子，死后仍被禁止安葬","他与兄长厄忒俄克勒斯为底比斯王位互相征战；克瑞翁禁止他入土，妹妹安提戈涅仍秘密为他覆土。","side-thebes",15,3,2,2,"Π"]
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
["odysseus","sirens","conflict","以计谋通过海妖歌声的考验"],["odysseus","scylla","conflict","船经海峡时失去六名同伴"],["odysseus","charybdis","conflict","在致命漩涡旁冒险通过"],["helios","odysseus","conflict","同伴触犯赫利俄斯的神牛"],["tiresias","odysseus","alliance","预言归途并警告神牛禁忌"],["aeolus","odysseus","alliance","赠送风囊助他归航"],["nausicaa","odysseus","alliance","救助海难后的漂流者"],["alcinous","odysseus","alliance","款待并安排船只送他回家"],["alcinous","nausicaa","family","父女"],
["zeus","perseus","family","宙斯与达娜厄之子"],["acrisios","danae","family","父女：阿克里西俄斯试图阻断预言"],["danae","perseus","family","母子"],["acrisios","perseus","conflict","外祖父企图避开关于外孙的神谕"],["polydectes","perseus","conflict","逼他远征夺取美杜莎首级"],["perseus","medusa","conflict","以盾面反光斩下戈耳工首级"],["perseus","andromeda","alliance","从海祭中救出并结为伴侣"],["cepheus","andromeda","family","父女"],["cassiopeia","andromeda","family","母女"],["poseidon","cassiopeia","conflict","夸口引来海神惩罚"],
["aegeus","theseus","family","父子"],["minos","ariadne","family","父女"],["minos","minotaur","family","弥诺陶洛斯被囚于迷宫"],["theseus","minotaur","conflict","迷宫中的决战"],["ariadne","theseus","alliance","线团帮助他走出迷宫"],["dionysus","ariadne","marriage","纳克索斯岛上的另一段结局"],
["orpheus","eurydice","marriage","夫妻与冥界重逢的尝试"],["hades","orpheus","conflict","允许他带亡妻离开，但不可回头"],["persephone","orpheus","alliance","与哈得斯一同被歌声打动"],
["pelias","jason","conflict","以取金羊毛的远征试图除掉侄子"],["jason","medea","alliance","盟誓、助战与后来破裂的婚姻"],["aeetes","medea","family","父女"],["aeetes","jason","conflict","守护金羊毛并设置试炼"],["orpheus","jason","alliance","同乘阿尔戈号远征"],["heracles","jason","alliance","同为阿尔戈英雄"],
["laius","jocasta","marriage","底比斯王与王后"],["laius","oedipus","family","父子与神谕"],["jocasta","oedipus","marriage","不知真相时成婚"],["oedipus","sphinx","conflict","回答谜语，解救底比斯"],["oedipus","tiresias","conflict","先知劝他停止追查旧王之死"],["oedipus","antigone","family","父女与流亡中的陪伴"],["theseus","oedipus","alliance","忒修斯在科罗诺斯庇护流亡的俄狄浦斯"],["medea","aegeus","marriage","美狄亚与埃勾斯成婚的异传"],["medea","theseus","conflict","美狄亚试图以毒酒除掉忒修斯"],["aethra","theseus","family","母子，爱特拉保存他的身世信物"],["aegeus","aethra","alliance","忒修斯父母的结合"],["jocasta","creon","family","姐弟"],["oedipus","eteocles","family","父子"],["oedipus","polyneices","family","父子"],["eteocles","polyneices","conflict","为王位相争，最终同归于尽"],["antigone","eteocles","family","兄妹"],["antigone","polyneices","family","兄妹与秘密安葬"],["creon","antigone","conflict","安提戈涅违抗禁葬令"],["creon","polyneices","conflict","克瑞翁禁止安葬"]
];
const groupNames={origin:"原初与大地后裔 · PRIMEVAL",titan:"泰坦 · THE OLD DYNASTY",olympian:"奥林匹斯 · THE GODS",mortal:"英雄 · THE MORTAL LINE",troy:"特洛伊 · THE WAR",odyssey:"归乡 · THE ODYSSEY",side:"支线英雄 · SIDE TALES"};
const groupOrder=["origin","titan","olympian","mortal","troy","odyssey","side"],groupX={origin:30,titan:280,olympian:555,mortal:1040,troy:1235,odyssey:1030,side:30};
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
  const labels={origin:"ORIGIN · PRIMEVAL",titan:"TITAN · THE OLD DYNASTY",olympian:"OLYMPUS · THE GODS",mortal:"HERO · THE MORTAL LINE",troy:"TROY · THE WAR",odyssey:"ODYSSEY · THE WAY HOME",side:"SIDE TALES · HEROES"};
  const portrait=document.getElementById("sheet-portrait"),cols=p.portrait[2]||4,rows=p.portrait[3]||4,col=p.portrait[1]%cols,row=Math.floor(p.portrait[1]/cols),ext=p.portrait[0]>=8?"jpg":"png";
  portrait.style.backgroundImage='url("./assets/portraits-'+String(p.portrait[0]).padStart(2,"0")+'.'+ext+'")';portrait.style.backgroundSize=(cols*100)+"% "+(rows*100)+"%";portrait.style.setProperty("--portrait-x",(cols>1?col*100/(cols-1):0)+"%");portrait.style.setProperty("--portrait-y",(rows>1?row*100/(rows-1):0)+"%");portrait.setAttribute("aria-label",p.name+"人物立绘");
  document.getElementById("sheet-emblem").textContent=p.symbol||"✦";document.getElementById("sheet-category").textContent=labels[p.group]||"MYTH";document.getElementById("sheet-name").textContent=p.name;document.getElementById("sheet-greek").textContent=p.latin;document.getElementById("sheet-role").textContent=p.role;document.getElementById("sheet-bio").textContent=p.bio;
  const related=document.getElementById("sheet-related");related.replaceChildren();const rel=neighbors(id);
  if(!rel.length){const span=document.createElement("span");span.textContent="故事起点";span.className="related-person";related.appendChild(span)}
  else for(const r of rel.slice(0,7)){const b=document.createElement("button");b.className="related-person";b.type="button";b.textContent=r.person.name;b.title=r.label;b.addEventListener("click",()=>selectPerson(r.person.id));related.appendChild(b)}
  const storyTarget=personSubstoryTargets[id]||firstSubstoryByChapter.get(p.chapter)||p.chapter;document.getElementById("sheet-story-link").href="#"+storyTarget;updateGraph();if(scrollToMap)document.getElementById("relationship-map").scrollIntoView({behavior:"smooth",block:"start"})
}
const search=document.getElementById("person-search"),searchResults=document.getElementById("search-results");
function drawSuggestions(){const q=searchTerm.trim().toLocaleLowerCase();searchResults.replaceChildren();if(!q){searchResults.hidden=true;return}const found=people.filter(p=>[p.name,p.latin,p.role].some(s=>s.toLocaleLowerCase().includes(q))).slice(0,8);for(const p of found){const b=document.createElement("button");b.type="button";b.setAttribute("role","option");const n=document.createElement("span"),m=document.createElement("small");n.textContent=p.name;m.textContent=p.role;b.append(n,m);b.addEventListener("click",()=>{search.value=p.name;searchTerm=p.name;searchResults.hidden=true;selectPerson(p.id);document.getElementById("person-sheet").scrollIntoView({behavior:"smooth",block:"center"})});searchResults.appendChild(b)}searchResults.hidden=found.length===0}
search.addEventListener("input",()=>{searchTerm=search.value;drawSuggestions();updateGraph()});
search.addEventListener("keydown",e=>{if(e.key==="Enter"){const q=searchTerm.trim().toLocaleLowerCase(),p=people.find(x=>[x.name,x.latin].some(s=>s.toLocaleLowerCase().includes(q)));if(p){e.preventDefault();searchResults.hidden=true;selectPerson(p.id);document.getElementById("person-sheet").scrollIntoView({behavior:"smooth",block:"center"})}}if(e.key==="Escape"){search.value="";searchTerm="";searchResults.hidden=true;updateGraph()}});
document.addEventListener("click",e=>{if(!e.target.closest(".search-box"))searchResults.hidden=true});
document.getElementById("filter-buttons").addEventListener("click",e=>{const b=e.target.closest("button[data-filter]");if(!b)return;activeFilter=b.dataset.filter;for(const x of document.querySelectorAll(".filter-chip")){const active=x===b;x.classList.toggle("is-active",active);x.setAttribute("aria-pressed",String(active))}updateGraph()});
document.querySelectorAll("[data-person]").forEach(el=>el.addEventListener("click",()=>selectPerson(el.dataset.person,true)));
document.getElementById("sheet-story-link").addEventListener("click",e=>{const p=byId.get(selectedId),targetId=p&&(personSubstoryTargets[selectedId]||firstSubstoryByChapter.get(p.chapter)||p.chapter),chapter=targetId&&document.getElementById(targetId);if(chapter){e.preventDefault();history.pushState(null,"","#"+targetId);chapter.scrollIntoView({behavior:"smooth",block:"start"})}});
document.addEventListener("keydown",e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="k"){e.preventDefault();search.focus()}});
const substoryPlans={
  "chapter-1":[{id:"sub-chaos",title:"卡俄斯与盖娅：世界如何出现",at:0},{id:"sub-uranus",title:"天空压住自己的孩子",at:1},{id:"sub-cronus",title:"克洛诺斯举起镰刀",at:2},{id:"sub-early-kingdom",title:"王位换手，恐惧留下",at:3}],
  "chapter-2":[{id:"sub-cronus-prophecy",title:"克洛诺斯吞下预言",at:0},{id:"sub-zeus-hidden",title:"石头与被藏起的婴儿",at:1},{id:"sub-children-freed",title:"宙斯救出兄弟姊妹",at:2},{id:"sub-titan-war",title:"十年提坦战争",at:3}],
  "chapter-3":[{id:"sub-titanomachy",title:"新一代向泰坦宣战",at:0},{id:"sub-cyclopes",title:"独眼巨人锻造雷霆",at:1},{id:"sub-typhon",title:"提丰挑战新王座",at:2},{id:"sub-prometheus",title:"分肉、欺骗与惩罚",at:3},{id:"sub-fire",title:"火种被带到人间",at:4},{id:"sub-pandora",title:"潘多拉打开陶坛",at:5}],
  "chapter-4":[{id:"sub-world-lots",title:"兄弟姊妹分掌世界",at:0},{id:"sub-athena-birth",title:"雅典娜从宙斯额头诞生",at:1},{id:"sub-leto-twins",title:"勒托在提洛岛生下双生子",at:2},{id:"sub-hermes-lyre",title:"赫尔墨斯偷牛，阿波罗换来竖琴",at:3},{id:"sub-gods-net",title:"青铜网困住阿瑞斯与阿佛洛狄忒",at:5}],
  "chapter-5":[{id:"sub-persephone-taken",title:"珀耳塞福涅被带往冥界",at:0},{id:"sub-hecate-torch",title:"赫卡忒提灯，把听见的事告诉母亲",at:1},{id:"sub-eleusis",title:"得墨忒耳来到厄琉息斯",at:2},{id:"sub-famine",title:"土地拒绝生长，宙斯让步",at:3},{id:"sub-pomegranate",title:"石榴籽与季节的约定",at:4}],
  "chapter-6":[{id:"sub-heracles-cradle",title:"摇篮里的毒蛇",at:0},{id:"sub-heracles-penance",title:"疯狂、哀悔与十二项劳役",at:1},{id:"sub-nemean-hydra",title:"狮子与九头蛇",at:2},{id:"sub-heracles-stables",title:"金角母鹿、野猪与被冲开的牛圈",at:3},{id:"sub-heracles-labors",title:"鸟群、公牛、食人马与亚马逊腰带",at:4},{id:"sub-cerberus",title:"金苹果与冥界之犬",at:5}],
  "chapter-7":[{id:"sub-golden-apple",title:"没有受邀的厄里斯带来金苹果",at:0},{id:"sub-paris-judgment",title:"帕里斯面对三位女神",at:1},{id:"sub-helen-taken",title:"海伦离开斯巴达",at:2},{id:"sub-war-gathering",title:"誓言召来舰队，战争逼近",at:3}],
  "chapter-8":[{id:"sub-chryses",title:"瘟疫、祭司与阿喀琉斯的愤怒",at:0},{id:"sub-achilles-withdraws",title:"英雄拒绝再为希腊军作战",at:1},{id:"sub-patroclus-armor",title:"帕特罗克洛斯穿上好友的盔甲",at:2},{id:"sub-patroclus-falls",title:"帕特罗克洛斯倒在城下",at:3},{id:"sub-hector-duel",title:"赫克托耳与阿喀琉斯决战",at:4},{id:"sub-priam-plea",title:"普里阿摩斯夜访敌营",at:5}],
  "chapter-9":[{id:"sub-nobody",title:"独眼巨人洞穴与“无人”之名",at:0},{id:"sub-windsack",title:"风囊被打开，波塞冬记下仇恨",at:1},{id:"sub-circe-underworld",title:"喀耳刻、赫尔墨斯与冥府问路",at:2},{id:"sub-sirens-strait",title:"海妖歌声与斯库拉海峡",at:3},{id:"sub-sun-cattle",title:"太阳神的牛群与船队覆灭",at:4},{id:"sub-calypso-nausicaa",title:"卡吕普索的岛与瑙西卡的援手",at:5},{id:"sub-ithaca-bed",title:"回到伊萨卡：一张只有夫妻懂的床",at:6}],
  "side-perseus":[
    {id:"sub-perseus-prophecy",title:"神谕、铜室与漂向海上的木箱",at:0,extra:["阿克里西俄斯害怕的不是女儿结婚，而是神谕把未来系在外孙身上。他把预言当成一道可以用锁和墙挡住的危险：铜室越坚固，他越相信自己仍能控制事情。可他每多做一步，母女便离王宫更远，预言本身却没有改变。"]},
    {id:"sub-perseus-seriphos",title:"塞里福斯岛：收留母子，也觊觎达娜厄",at:1,extra:["木箱被海浪推到塞里福斯，岛上的渔人救起母子；珀耳修斯就在这座岛上长大。起初波吕得克忒斯以庇护者的身份接纳他们，年月过去，他却把达娜厄看成自己可以占有的奖赏。珀耳修斯挡在母亲面前，国王便借一场礼物宴会给年轻人设下陷阱。"]},
    {id:"sub-perseus-gorgon",title:"远征戈耳工：借来的眼睛与镜面之盾",at:2,extra:["宴席上众人谈到赠送马匹，珀耳修斯脱口说自己能带回美杜莎的首级。波吕得克忒斯立刻把这句少年人的夸口变成命令。珀耳修斯并不知道戈耳工住在哪里，雅典娜与赫尔墨斯于是指引他先找到守路的三位老妇人；她们共用一只眼睛，他趁她们传递时拿走眼睛，换得前往宁芙居所的线索。"]},
    {id:"sub-perseus-andromeda",title:"礁石上的安德洛墨达与海怪",at:3,extra:["刻甫斯与卡西俄珀亚向珀耳修斯说明海患从何而来，也说明女儿为何被缚在岸边。英雄提出救援，并要求他们答应让安德洛墨达与自己同行；国王和王后接受了条件。海怪逼近时，珀耳修斯用武器与美杜莎首级的方式在不同传统中各有讲法，最终他解开锁链，把公主从祭品的位置救下来。"]},
    {id:"sub-perseus-return",title:"把首级带回家，铁饼误中外祖父",at:4,extra:["珀耳修斯回岛时，达娜厄仍躲在祭坛旁寻求庇护。他让母亲与忠于他们的人先退开，再把美杜莎的首级转向波吕得克忒斯和他的同党，强迫索婚的国王永远停手。之后他携安德洛墨达回到故土；阿克里西俄斯听见外孙归来便避走他乡，最后却在异地竞技会上被一枚偏航的铁饼击中。故事让预言成真，却没有把珀耳修斯写成蓄意弑亲者。"]}
  ],
  "side-theseus":[
    {id:"sub-theseus-origin",title:"石下的剑：忒修斯走向雅典",at:0,extra:["去雅典的陆路并不安全。忒修斯逐一遇见用暴力勒索旅人的强盗，把每个人施加给路人的刑罚反转回去；他不是靠绕路长大，而是靠一次次正面应对，证明自己配得上那把石下之剑。等他走到雅典，传闻已先一步传进宫里。"]},
    {id:"sub-theseus-poison",title:"毒酒与认父：美狄亚认出了剑",at:1,extra:["美狄亚从异乡来客身上的剑认出了埃勾斯留下的信物。她不愿新王的儿子出现，便劝埃勾斯在宴席上以毒酒除掉这个年轻人；埃勾斯端杯时也认出剑柄，立刻打翻酒杯。父子相认后，美狄亚离开雅典。此处让伊阿宋的旧盟友进入忒修斯的故事：同一个美狄亚，既曾帮助远征者，也曾把毒杯递向英雄。"]},
    {id:"sub-theseus-maze",title:"克里特贡船：线团进入迷宫",at:2,extra:["雅典定期送往克里特的贡品人数在不同讲法里并不一样，但每次出航都意味着一群年轻人可能再也回不来。忒修斯自愿登船，打算终止这件事。阿里阿德涅先问清迷宫的路，再把线团、入口处的固定办法和一把利剑交给他。忒修斯循线抵达最深处，在狭窄黑暗中与弥诺陶洛斯搏斗，杀死它后才沿线把所有人领出。"]},
    {id:"sub-theseus-naxos",title:"纳克索斯：英雄离开了救他的人",at:3,extra:["离开克里特后，船停在纳克索斯。阿里阿德涅已经离开父亲、王国和旧生活，原以为她与忒修斯会一同去雅典；醒来时却发现船已驶离。有人说忒修斯主动抛下她，有人把离别归于神意；伪阿波罗多洛斯则叙述狄俄倪索斯爱上她并带走她。几个版本都让这段胜利留下裂缝：走出迷宫的办法由阿里阿德涅给出，她却没有随英雄回家。"]},
    {id:"sub-theseus-black-sail",title:"黑帆没有换下：埃勾斯之死与王位",at:4,extra:["父子约定以白帆报平安，可离别后的悲伤和返航的劳累让忒修斯忘记了信号。埃勾斯从卫城看见黑帆，来不及核实便相信儿子已经死在克里特，纵身投海。忒修斯赢得了雅典王位，却是在父亲死讯中继承它；神话把归航中最小的疏忽，变成整场冒险最重的代价。"]}
  ],
  "side-orpheus":[
    {id:"sub-orpheus-love",title:"歌者与欧律狄刻：短暂的婚姻",at:0,extra:["俄耳甫斯的歌不是宴席上的装饰：传说里石块会随着琴声移动，动物会围拢聆听，船员也能在争吵时被他安定下来。欧律狄刻死后，这种力量第一次显出边界。不同作者给她的死因不同，有的写蛇咬，有的写她逃避追逐时中毒；共同点是死亡来得太快，俄耳甫斯连道别都没能完成。"]},
    {id:"sub-orpheus-underworld",title:"活人走进冥府：一首歌穿过黑暗",at:1,extra:["俄耳甫斯穿过亡者之门，来到河边摆渡处，接着面对守在宫殿入口的三头犬。没有一关靠剑解决：船夫停下桨，犬伏在地，亡灵暂时忘记自己的苦役。冥府原本让每一个进入者交出旧身份，他却用琴声让哈得斯和珀耳塞福涅听见一个人的名字——欧律狄刻。"]},
    {id:"sub-orpheus-rule",title:"哈得斯的条件：听见脚步，却不能确认",at:2,extra:["冥王允许亡妻跟随他离开，但规则把希望与不安绑在了一起：一路向上，不可回头，直到两人都踏出冥府。欧律狄刻必须跟在后面，俄耳甫斯不能牵她的手，也不能看见她。出口还远时，他听不到脚步，便只能把信任交给一个自己无法验证的约定。"]},
    {id:"sub-orpheus-glance",title:"出口前的一眼：第二次失去",at:3,extra:["俄耳甫斯听见天光似乎已经到了，却仍不确定身后是否有人。他回头不是因为忘了规则，而是因为太想确认规则真的被遵守。那一瞬间，欧律狄刻重新落入阴影；她没有责骂，只留下告别。诗人把短短一眼写成整段故事的断点：两人都做到了几乎最后一步，仍无法把死者带回生者的世界。"]},
    {id:"sub-orpheus-after",title:"歌声留下，歌者死去",at:4,extra:["回到人间后，俄耳甫斯拒绝新的婚姻，在荒野和山谷中歌唱。奥维德接着写他被狄俄倪索斯的女性追随者围攻撕碎，琴与头颅顺河漂流，琴声仍没有完全消失；其他传统对他的死法不同。故事在这里把回头的失误延伸到更久的哀悼，也解释了为何后世仍把他的名字和音乐、亡灵与失去连在一起。"]}
  ],
  "side-argos":[
    {id:"sub-jason-sandals",title:"单只凉鞋与金羊毛的条件",at:0,extra:["珀利阿斯听过一则警告：当心那名只穿一只凉鞋的人。伊阿宋回到伊奥尔科斯索回王位，恰好以这样的样子出现。珀利阿斯把危险推到遥远海岸，命他取回金羊毛；伊阿宋则把任务变成一次招募，召来许多城邦的英雄。阿尔戈号离港时，他们不知道这项差事会把船长的婚姻也写进代价。"]},
    {id:"sub-argos-voyage",title:"阿尔戈号出航：一群人的远征",at:1,extra:["船队一路遇到陌生海岸、暴风和会突然合拢的岩石。俄耳甫斯以琴声让船员保持节奏，赫拉克勒斯凭力量支撑最艰难的航段；途中赫拉克勒斯因同伴失踪离队，队伍因此少了一位最强的英雄，也更清楚这不是一趟可以全员如数回来的航行。各版本对中途停靠和伙伴名单有出入，这里抓住最常被讲述的远航节点。"]},
    {id:"sub-colchis-tests",title:"科尔基斯的火牛与龙牙战士",at:2,extra:["美狄亚帮助伊阿宋之前，先经历了一场犹豫：如果帮助陌生英雄，她就要背叛父亲；如果拒绝，她便要看着他死在父亲设计的考验里。她把护身药膏交给伊阿宋，教他怎样套住铜牛、怎样面对从土地里长出的武装者。伊阿宋照她的指点把石块掷进人群，让战士们彼此混战，再趁金羊毛的守护者沉睡取走宝物。"]},
    {id:"sub-fleece-escape",title:"金羊毛到手：返航并非凯旋",at:3,extra:["夺得金羊毛后，两人必须赶在埃厄忒斯追兵合围前离开科尔基斯。美狄亚从故国带走的不是一件战利品，而是对父亲和家族的背叛；伊阿宋则带着她返回，却还没有兑现珀利阿斯答应的王位。远征的胜利因此没有带来安稳的家：美狄亚的魔法和忠诚先替伊阿宋解决一项任务，往后每一次求助却都让两人之间的债更重。"]},
    {id:"sub-pelias-revenge",title:"珀利阿斯的结局与科林斯的选择",at:4,extra:["珀利阿斯拒绝让位后，美狄亚设下返老还童的骗局，诱使他的女儿们照着她的做法处理父亲；她们相信自己能救他，却造成了他的死亡。此事令伊阿宋和美狄亚离开伊奥尔科斯，转而在科林斯生活。多年以后，伊阿宋为了王位和新盟约，决定迎娶当地王室女子；他以为能同时保住地位和家庭，美狄亚却听见他把旧誓约当成已经过期。"]},
    {id:"sub-medea-tragedy",title:"美狄亚的复仇与伊阿宋的结局",at:5,extra:["欧里庇得斯的悲剧把结局写得最惨：美狄亚假装接受放逐，让孩子把浸过毒药的华服送给新娘；新娘穿上后遭烈焰与毒物吞噬，前来救女儿的国王也一同死去。她随后杀死自己的孩子，使伊阿宋再也无法把背叛说成只伤害了妻子；最后乘着神赐的车离开，留下他独自面对尸体和破碎的承诺。伊阿宋后来的死法另有传说，悲剧本身止于两人最后的对峙。"]}
  ],
  "side-thebes":[
    {id:"sub-oedipus-oracle",title:"拉伊俄斯与伊俄卡斯忒：被遗弃的婴儿",at:0,extra:["孩子脚踝被刺穿后交给牧人带走，这伤痕后来成为他名字的来历。牧人没有执行杀婴命令，而是把孩子交给另一个牧人，婴儿最后被科林斯王室收养。俄狄浦斯在养父母家中长大，周围人却偶尔拿他的出身取笑；他真正想查清的是自己是谁，神谕给他的回答却只有更可怕的未来。"]},
    {id:"sub-oedipus-crossroads",title:"十字路口的相杀与斯芬克斯谜题",at:1,extra:["俄狄浦斯离开科林斯，想让养育自己的家人不受神谕伤害；途中与一位老王的车队在狭路相遇，争执从口角变成杀戮。抵达底比斯后，他没有先问王位，而是应对斯芬克斯给全城的谜题。答对以后，底比斯把他当成救星；人群的欢呼遮住了他刚刚杀死的正是拉伊俄斯。"]},
    {id:"sub-oedipus-king",title:"成为国王、成为丈夫：真相暂时沉睡",at:2,extra:["底比斯的灾病不是一个陌生敌人带来的，而是城里有一桩未被处理的旧罪。俄狄浦斯下令查明弑君者，起初相信只要把所有证人找齐，就能把污染赶出城市。他的调查越认真，越让预言中的亲缘关系显形；忒瑞西阿斯不愿开口，幸存牧人却终于说出谁把孩子送离王宫。"]},
    {id:"sub-oedipus-truth",title:"盲目之前：一家人看见同一真相",at:3,extra:["伊俄卡斯忒先听懂牧人的证词，哀求俄狄浦斯停止追问；他误以为她担心自己出身卑微，仍坚持把命案查到底。等最后一名证人确认婴儿的身份，俄狄浦斯才知道自己既杀了父亲，也娶了母亲。伊俄卡斯忒死后，他用别针刺瞎双眼，并请求流放；他失去王位，也失去过去以为牢不可破的家庭。"]},
    {id:"sub-oedipus-colonus",title:"流亡的终点与安提戈涅的抗命",at:4,extra:["俄狄浦斯与安提戈涅一路讨食、避开故乡追兵，最后来到雅典附近的科罗诺斯。忒修斯没有把他当作污染的象征驱逐，而是答应提供庇护；在索福克勒斯的剧作里，俄狄浦斯死在无人能随意找到的圣地，成为守护雅典的秘密。回到底比斯后，安提戈涅面对克瑞翁的禁令，认为兄长的尸体仍有接受葬礼的权利；她因此被封进石室。克瑞翁迟来的悔悟救不了她，儿子也在悲剧中死去，王后随后自尽，禁令最终毁掉发布命令的王室。"]}
  ]
};
const personSubstoryTargets={
  chaos:"sub-chaos",gaia:"sub-chaos",uranus:"sub-uranus",cronus:"sub-cronus",rhea:"sub-cronus-prophecy",zeus:"sub-zeus-hidden",titan:"sub-titan-war",
  demeter:"sub-persephone-taken",persephone:"sub-persephone-taken",hecate:"sub-hecate-torch",hades:"sub-pomegranate",
  heracles:"sub-heracles-labors",prometheus:"sub-prometheus",pandora:"sub-pandora",
  perseus:"sub-perseus-gorgon",danae:"sub-perseus-prophecy",acrisios:"sub-perseus-prophecy",polydectes:"sub-perseus-seriphos",medusa:"sub-perseus-gorgon",andromeda:"sub-perseus-andromeda",cepheus:"sub-perseus-andromeda",cassiopeia:"sub-perseus-andromeda",
  theseus:"sub-theseus-maze",aethra:"sub-theseus-origin",aegeus:"sub-theseus-poison",ariadne:"sub-theseus-naxos",minos:"sub-theseus-maze",minotaur:"sub-theseus-maze",medea:"sub-colchis-tests",dionysus:"sub-theseus-naxos",
  orpheus:"sub-orpheus-underworld",eurydice:"sub-orpheus-love",jason:"sub-jason-sandals",pelias:"sub-jason-sandals",aeetes:"sub-colchis-tests",
  oedipus:"sub-oedipus-oracle",laius:"sub-oedipus-oracle",jocasta:"sub-oedipus-oracle",sphinx:"sub-oedipus-crossroads",tiresias:"sub-oedipus-king",antigone:"sub-oedipus-colonus",creon:"sub-oedipus-colonus",eteocles:"sub-oedipus-colonus",polyneices:"sub-oedipus-colonus"
};
const chapters=[...document.querySelectorAll(".chapter")];
const firstSubstoryByChapter=new Map(Object.entries(substoryPlans).map(([chapter,parts])=>[chapter,parts[0]?.id]));
function buildStoryNavigation(){
  const directory=document.createElement("nav");directory.className="story-directory";directory.setAttribute("aria-label","故事章节目录");
  const head=document.createElement("div");head.className="story-directory-head";head.innerHTML='<span class="eyebrow">CHAPTERS & SUBSTORIES</span><h3>先选故事，再进入子章节</h3><p>每篇主故事都拆成可直达的子故事；点人物关系图中的“读她/他的故事”，也会跳到相关段落。</p>';directory.appendChild(head);
  const grid=document.createElement("div");grid.className="story-directory-grid";
  for(const chapter of chapters){const parts=substoryPlans[chapter.id];if(!parts?.length)continue;const h=chapter.querySelector(".chapter-copy h3"),copy=chapter.querySelector(".chapter-copy"),paragraphs=[...copy.querySelectorAll(":scope > p:not(.variant-note)")];const toc=document.createElement("nav");toc.className="chapter-subnav";toc.setAttribute("aria-label","本章子故事目录");const tocLabel=document.createElement("span");tocLabel.textContent="本章子故事";toc.appendChild(tocLabel);
    for(let i=0;i<parts.length;i++){const part=parts[i],target=paragraphs[part.at]||(part.at===paragraphs.length?paragraphs.at(-1):null);if(!target)continue;const subhead=document.createElement("h4");subhead.id=part.id;subhead.className="substory-heading";subhead.textContent=part.title;if(part.at===paragraphs.length){let anchor=target;while(anchor.nextElementSibling?.matches(".substory-extra"))anchor=anchor.nextElementSibling;anchor.after(subhead)}else target.before(subhead);const link=document.createElement("a");link.href="#"+part.id;link.textContent=part.title;toc.appendChild(link);
      if(part.extra?.length){const next=parts[i+1],endAt=(next?.at??paragraphs.length)-1,endP=part.at===paragraphs.length?subhead:paragraphs[Math.max(part.at,endAt)]||target;let cursor=endP;for(const extra of part.extra){const p=document.createElement("p");p.className="substory-extra";p.textContent=extra;cursor.after(p);cursor=p}}
    }
    h.insertAdjacentElement("afterend",toc);const card=document.createElement("a");card.className="story-directory-card";card.href="#"+parts[0].id;const number=document.createElement("span");number.className="story-directory-number";number.textContent=chapter.dataset.chapter||String(grid.children.length+1).padStart(2,"0");const title=document.createElement("b");title.textContent=h.textContent.replace(/\s+/g," ").trim();const count=document.createElement("small");count.textContent=parts.length+" 个子故事";card.append(number,title,count);grid.appendChild(card)
  }
  directory.appendChild(grid);document.querySelector(".stories-intro").insertAdjacentElement("afterend",directory)
}
buildStoryNavigation();
const storyNameAliases={orpheus:["俄耳甫斯"],uranus:["乌拉诺斯"],cyclopes:["独眼巨人"]};
const supplementalStoryCharacters=[
  {key:"eurystheus",names:["欧律斯透斯"],latin:"Eurystheus",role:"迈锡尼王，赫拉克勒斯劳役的发布者",bio:"他命令赫拉克勒斯完成十二项艰难任务；有些任务明明完成，他仍以有人相助为由拒绝承认。"},
  {key:"nemean-lion",names:["涅墨亚狮子"],latin:"Nemean Lion",role:"赫拉克勒斯第一项劳役中的不死之狮",bio:"它的皮刀枪不入，赫拉克勒斯最后只能徒手勒死它，再用狮爪剥下皮毛。"},
  {key:"lernaean-hydra",names:["九头蛇","勒耳那九头蛇"],latin:"Lernaean Hydra",role:"斩头会再生的沼泽巨蛇",bio:"赫拉克勒斯每斩下一颗头，伤口便会长出新的头；他与同伴用火封住断颈，才找到战胜它的办法。"},
  {key:"erymanthian-boar",names:["厄律曼托斯野猪"],latin:"Erymanthian Boar",role:"赫拉克勒斯劳役中的巨型野猪",bio:"赫拉克勒斯把它赶进积雪深处，等它筋疲力尽后将它活捉。"},
  {key:"augeas",names:["奥革阿斯"],latin:"Augeas",role:"拥有多年未清理牛圈的国王",bio:"赫拉克勒斯改道两条河水清理牛圈；奥革阿斯却拒绝承认这项劳役，也不肯支付约定的报酬。"},
  {key:"stymphalian-birds",names:["斯廷法罗斯湖边的食人鸟","斯廷法罗斯食人鸟"],latin:"Stymphalian Birds",role:"以铜喙和羽箭伤人的食人鸟群",bio:"赫拉克勒斯用铜响器惊起鸟群，再将它们从湖边驱散。"},
  {key:"cretean-bull",names:["克里特公牛"],latin:"Cretan Bull",role:"赫拉克勒斯劳役中的狂暴公牛",bio:"这头公牛来自克里特；赫拉克勒斯奉命将它活捉，带回迈锡尼。"},
  {key:"diomedes",names:["狄俄墨得斯"],latin:"Diomedes",role:"饲养食人马的色雷斯国王",bio:"他的马匹以人肉为食。赫拉克勒斯制服马群并将它们带走，完成又一项劳役。"},
  {key:"geryon",names:["革律翁"],latin:"Geryon",role:"世界西端的三身巨人",bio:"赫拉克勒斯远赴世界边缘，夺走革律翁的牛群，完成第十项劳役。"},
  {key:"hesperides",names:["赫斯珀里得斯姐妹","赫斯珀里得斯"],latin:"Hesperides",role:"守护西方金苹果园的宁芙姐妹",bio:"她们看守金苹果园。赫拉克勒斯在一项劳役中取回金苹果；不同版本对他如何取得苹果有不同讲法。"},
  {key:"cerberus",names:["刻耳柏洛斯"],latin:"Cerberus",role:"守卫冥界入口的三头犬",bio:"它把亡者留在冥界。赫拉克勒斯曾奉命将它带到地面，又按约把它送回；俄耳甫斯则用歌声让它安静下来。"},
  {key:"chryses",names:["克律塞斯"],latin:"Chryses",role:"阿波罗的祭司，克律塞伊斯之父",bio:"他带着赎金来到希腊军营请求领回女儿，却遭阿伽门农羞辱；阿波罗随后以瘟疫惩罚联军。"},
  {key:"chryseis",names:["克律塞伊斯"],latin:"Chryseis",role:"阿波罗祭司克律塞斯的女儿",bio:"她被阿伽门农扣作战利品。父亲来赎人遭拒后，阿波罗降下瘟疫；她被送回后，阿伽门农又夺走布里塞伊斯。"},
  {key:"graeae",names:["格赖埃三姐妹","格赖埃"],latin:"Graeae",role:"共用一只眼睛的三位老妇人",bio:"她们守着通往戈耳工住处的线索。珀耳修斯趁她们传递共用眼睛时取走它，换来寻找美杜莎的指引。"},
  {key:"hundred-handed-ones",names:["百臂巨人"],latin:"Hecatoncheires",role:"被乌拉诺斯囚禁的百臂巨人",bio:"盖娅与乌拉诺斯所生的巨人，被囚在大地深处。宙斯释放他们后，他们以巨石助新一代诸神战胜泰坦。"},
  {key:"gorgons",names:["戈耳工姐妹"],latin:"Gorgons",role:"住在世界边缘的蛇发女怪",bio:"美杜莎是戈耳工姐妹中唯一会死的一位；珀耳修斯借助雅典娜的盾面反光避开她的石化目光。"}
];
const storyCharacterByAlias=new Map();
for(const person of people){const entry={...person,aliases:storyNameAliases[person.id]||[]};for(const name of [person.name,...entry.aliases])storyCharacterByAlias.set(name,entry)}
for(const character of supplementalStoryCharacters)for(const name of character.names)storyCharacterByAlias.set(name,character);
const storyNamePattern=[...storyCharacterByAlias.keys()].sort((a,b)=>b.length-a.length).map(name=>name.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|");
const storyNameRegex=new RegExp(storyNamePattern,"gu"),keyboardStoryCharacters=new Set();
function annotateStoryTextNode(textNode){const source=textNode.nodeValue;storyNameRegex.lastIndex=0;let match,last=0;const fragment=document.createDocumentFragment();while((match=storyNameRegex.exec(source))){if(match.index>last)fragment.appendChild(document.createTextNode(source.slice(last,match.index)));const character=storyCharacterByAlias.get(match[0]),mention=document.createElement("span"),key=character.id||character.key;mention.className="character-mention";mention.dataset.characterKey=key;mention.dataset.characterName=match[0];mention.textContent=match[0];mention.setAttribute("aria-label",match[0]+"，"+character.role+"。"+character.bio);if(!keyboardStoryCharacters.has(key)){mention.tabIndex=0;mention.setAttribute("aria-describedby","character-tooltip");keyboardStoryCharacters.add(key)}fragment.appendChild(mention);last=storyNameRegex.lastIndex}if(last){if(last<source.length)fragment.appendChild(document.createTextNode(source.slice(last)));textNode.replaceWith(fragment)}}
function annotateStoryCharacters(){const targets=document.querySelectorAll(".chapter .chapter-copy h3,.chapter .chapter-copy h4,.chapter .chapter-copy p:not(.variant-note),.chapter figcaption");for(const target of targets){const walker=document.createTreeWalker(target,NodeFilter.SHOW_TEXT);const nodes=[];while(walker.nextNode())if(walker.currentNode.nodeValue.trim()&&!walker.currentNode.parentElement.closest(".character-mention,.chapter-people,button,a"))nodes.push(walker.currentNode);for(const node of nodes)annotateStoryTextNode(node)}}
const characterTooltip=document.createElement("div");characterTooltip.className="character-tooltip";characterTooltip.id="character-tooltip";characterTooltip.setAttribute("role","tooltip");characterTooltip.setAttribute("aria-hidden","true");document.body.appendChild(characterTooltip);
function positionCharacterTooltip(){if(!activeCharacterMention)return;const rect=activeCharacterMention.getBoundingClientRect(),tipRect=characterTooltip.getBoundingClientRect(),width=tipRect.width,height=tipRect.height;let left=rect.left+rect.width/2-width/2;left=Math.max(12,Math.min(left,innerWidth-width-12));let top=rect.bottom+10;if(top+height>innerHeight-12)top=rect.top-height-10;top=Math.max(12,Math.min(top,innerHeight-height-12));characterTooltip.style.left=left+"px";characterTooltip.style.top=top+"px"}
let activeCharacterMention=null;
function showCharacterTooltip(mention){const character=storyCharacterByAlias.get(mention.dataset.characterName);if(!character)return;activeCharacterMention=mention;characterTooltip.replaceChildren();const title=document.createElement("strong"),latin=document.createElement("small"),role=document.createElement("b"),bio=document.createElement("p");title.textContent=mention.dataset.characterName;latin.textContent=character.latin;role.textContent=character.role;bio.textContent=character.bio;characterTooltip.append(title,latin,role,bio);characterTooltip.setAttribute("aria-hidden","false");characterTooltip.classList.add("is-visible");positionCharacterTooltip()}
function hideCharacterTooltip(){characterTooltip.classList.remove("is-visible");characterTooltip.setAttribute("aria-hidden","true");activeCharacterMention=null}
document.addEventListener("pointerover",event=>{const mention=event.target.closest?.(".character-mention");if(mention)showCharacterTooltip(mention)});
document.addEventListener("pointerout",event=>{if(event.target.closest?.(".character-mention")&&!event.relatedTarget?.closest?.(".character-mention"))hideCharacterTooltip()});
document.addEventListener("focusin",event=>{const mention=event.target.closest?.(".character-mention");if(mention)showCharacterTooltip(mention)});
document.addEventListener("focusout",event=>{if(event.target.closest?.(".character-mention"))hideCharacterTooltip()});
window.addEventListener("scroll",positionCharacterTooltip,{passive:true});window.addEventListener("resize",positionCharacterTooltip);
annotateStoryCharacters();
function updateProgress(){const total=document.documentElement.scrollHeight-innerHeight,progress=total>0?Math.min(100,Math.max(0,scrollY/total*100)):0;document.getElementById("progress-bar").style.width=progress+"%";const current=chapters.reduce((n,c,i)=>c.getBoundingClientRect().top<innerHeight*.56?i+1:n,1);document.getElementById("progress-label").textContent=String(current).padStart(2,"0")+" / "+String(chapters.length).padStart(2,"0")}
window.addEventListener("scroll",updateProgress,{passive:true});window.addEventListener("resize",updateProgress);makeGraph();updateProgress();
