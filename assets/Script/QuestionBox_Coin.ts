// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Component, Label, Prefab, AudioClip } from 'cc';
const {ccclass, property} = _decorator;

@ccclass('QuestionBoxCoin')
export default class NewClass extends Component {
    @property(Label)
    label: Label | null = null;
    @property
    text: string = 'hello';
    @property(Prefab)
    coin: Prefab | null = null;
    @property(AudioClip)
    coinAudio: AudioClip | null = null;
//    // LIFE-CYCLE CALLBACKS:
//    // onLoad () {}
    start () {
//        // let newCoin = cc.instantiate(this.coin);
//        // let current_pos = this.node.getPosition();
//        // this.node.addChild(newCoin);
//        // newCoin.setPosition(cc.v2(100, 200));
    }
//    // update (dt) {}
    onBeginContact(contact, self, other){
        // let normal = contact.getWorldManifold().normal;
        // if(normal.y < 0){
//            // console.log("block hit from below");
        // if(other.node.name == "Player"){
        // cc.audioEngine.playEffect(this.coinAudio, false);
        // other.node.getComponent("Player").addScore(100);
//                // console.log(other.node.getComponent("Player").score);
        // let newCoin = cc.instantiate(this.coin);
//                // newCoin.parent = this.node.parent;
        // let current_pos = this.node.getPosition();
        // this.node.addChild(newCoin);
//                // console.log(newCoin.parent);
        // newCoin.setPosition(cc.v2(-8,8));
//                // console.log("current pos: "+ current_pos);
//                // console.log("position: "+ this.node.position)
//                // console.log("newCoin pos: "+cc.v2(current_pos.x/2, current_pos.y/2+30));
        // this.scheduleOnce(function(){
        // newCoin.destroy();
//                    // console.log("destroy");
        // }, 0.1);
        // }
        // }
//        // console.log("block hit");
    }
}


/**
 * Note: The original script has been commented out, due to the large number of changes in the script, there may be missing in the conversion, you need to convert it manually
 */
// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class NewClass extends cc.Component {
// 
//     @property(cc.Label)
//     label: cc.Label = null;
// 
//     @property
//     text: string = 'hello';
// 
//     @property(cc.Prefab)
//     coin: cc.Prefab = null;
// 
//     @property(cc.AudioClip)
//     coinAudio: cc.AudioClip = null;
//     // LIFE-CYCLE CALLBACKS:
// 
//     // onLoad () {}
// 
//     start () {
//         // let newCoin = cc.instantiate(this.coin);
//         // let current_pos = this.node.getPosition();
//         // this.node.addChild(newCoin);
//         // newCoin.setPosition(cc.v2(100, 200));
//     }
// 
//     // update (dt) {}
// 
//     onBeginContact(contact, self, other){
//         let normal = contact.getWorldManifold().normal;
//         if(normal.y < 0){
//             // console.log("block hit from below");
//             if(other.node.name == "Player"){
//                 cc.audioEngine.playEffect(this.coinAudio, false);
//                 other.node.getComponent("Player").addScore(100);
//                 // console.log(other.node.getComponent("Player").score);
//                 let newCoin = cc.instantiate(this.coin);
//                 // newCoin.parent = this.node.parent;
//                 let current_pos = this.node.getPosition();
//                 this.node.addChild(newCoin);
//                 // console.log(newCoin.parent);
//                 newCoin.setPosition(cc.v2(-8,8));
//                 // console.log("current pos: "+ current_pos);
//                 // console.log("position: "+ this.node.position)
//                 // console.log("newCoin pos: "+cc.v2(current_pos.x/2, current_pos.y/2+30));
//                 this.scheduleOnce(function(){
//                     newCoin.destroy();
//                     // console.log("destroy");
//                 }, 0.1);
//             }
//         }
//         // console.log("block hit");
//     }
// }
