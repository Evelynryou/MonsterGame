const levelQuest = {
    positionX: 4500,
    idleMessage: '<p>This is serious..<br>People are turning into zombies..<br><span>Press Enter to chat</span></p>',
    quest: () => {
        const message = {
            start:  'Monsters are appearing in the village, turning the villagers into zombies... Hunt the monsters to save the villagers, and if you prove your strength by reaching <span>level 5 or higher</span>, I’ll lend you my power to defeat the Zombie King!',
            ing: 'Oh no, you haven’t reached the required level yet...',
            suc: 'You’ve reached the level! I’ll give you my power!',
            end: 'Thank you! Good luck!'
        }
        let messageState = '';

        if(!npcOne.questStart){
            messageState = message.start;
            npcOne.questStart = true;
        }else if(npcOne.questStart && !npcOne.questEnd && hero.level < 5){
            messageState = message.ing;
        }else if(npcOne.questStart && !npcOne.questEnd && hero.level >= 5){
            messageState = message.suc;
            npcOne.questEnd = true;
            hero.heroUpgrade(50000);
        }else if(npcOne.questStart && npcOne.questEnd){
            messageState = message.end;
        }
        let text = '';
            text += '<figure class="npc_img">';
			text +=	'<img src="../../lib/images/npc.png" alt="">';
			text +=	'</figure>';
			text +=	'<p>';
            text += messageState;
			text +=	'</p>';
        const modalInner = document.querySelector('.quest_modal .inner_box .quest_talk');
            modalInner.innerHTML = text;
    }
}
const levelQuestTwo = {
    positionX: 8500,
    idleMessage: '<p>"The ZombieKing is about to be resurrected..."<br>People are turning into zombies..<br><span>Press Enter to chat</span></p>',
    quest: () => {
        const level = 7;
        const message = {
            start:  `Monsters are appearing in the village, turning the villagers into zombies... Hunt the monsters to save the villagers, and if you prove your strength by reaching <span>level ${level} or higher</span>, I’ll lend you my power to defeat the Zombie King!`,
            ing: 'Oh no, you haven’t reached the required level yet...',
            suc: 'You’ve reached the level! I’ll give you my power!',
            end: 'Thank you! Good luck!'
        }
        let messageState = '';

        if(!npcTwo.questStart){
            messageState = message.start;
            npcTwo.questStart = true;
        }else if(npcTwo.questStart && !npcTwo.questEnd && hero.level < level){
            messageState = message.ing;
        }else if(npcTwo.questStart && !npcTwo.questEnd && hero.level >= level){
            messageState = message.suc;
            npcTwo.questEnd = true;
            hero.heroUpgrade(70000);
        }else if(npcTwo.questStart && npcTwo.questEnd){
            messageState = message.end;
        }
        let text = '';
            text += '<figure class="npc_img">';
			text +=	'<img src="../../lib/images/npc.png" alt="">';
			text +=	'</figure>';
			text +=	'<p>';
            text += messageState;
			text +=	'</p>';
        const modalInner = document.querySelector('.quest_modal .inner_box .quest_talk');
            modalInner.innerHTML = text;
    }
}
