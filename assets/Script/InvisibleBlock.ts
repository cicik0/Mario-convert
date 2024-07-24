// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Component, Label, SpriteFrame, AudioClip } from 'cc';
const {ccclass, property} = _decorator;

@ccclass('InvisibleBlock')
export default class NewClass extends Component {
    @property(Label)
    label: Label | null = null;
    @property
    text: string = 'hello';
    @property(SpriteFrame)
    spriteFrame: SpriteFrame | null = null;
    @property(AudioClip)
    blockAudio: AudioClip | null = null;
    private state = "Invisible";
    private sprite = null;
//    // LIFE-CYCLE CALLBACKS:
//    // onLoad () {}
    start () {

    }
//    // update (dt) {}
    onBeginContact(contact, self, other){
        // let normal = contact.getWorldManifold().normal;
        // if(this.state == "Invisible"){
        // if(normal.y < 0){
        // cc.audioEngine.playEffect(this.blockAudio, false);
        // console.log("block hit from below");
        // if(other.node.name == "Player"){

        // console.log("hit invisible");
        // this.state = "Visible";
        // this.sprite = this.node.getComponent(cc.Sprite).spriteFrame = this.spriteFrame;
        // other.node.getComponent("Player").addScore(100);
        // }
        // }else{
        // contact.disabled = true;
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
//     @property(cc.SpriteFrame)
//     spriteFrame: cc.SpriteFrame = null;
// 
//     @property(cc.AudioClip)
//     blockAudio: cc.AudioClip = null;
// 
//     private state = "Invisible";
//     private sprite = null;
//     // LIFE-CYCLE CALLBACKS:
// 
//     // onLoad () {}
// 
//     start () {
//         
//     }
// 
//     // update (dt) {}
//     onBeginContact(contact, self, other){
//         let normal = contact.getWorldManifold().normal;
//         if(this.state == "Invisible"){
//             if(normal.y < 0){
//                 cc.audioEngine.playEffect(this.blockAudio, false);
//                 console.log("block hit from below");
//                 if(other.node.name == "Player"){
// 
//                         console.log("hit invisible");
//                         this.state = "Visible";
//                         this.sprite = this.node.getComponent(cc.Sprite).spriteFrame = this.spriteFrame;
//                         other.node.getComponent("Player").addScore(100);
//                 }
//             }else{
//                 contact.disabled = true;
//             }
//         } 
//         // console.log("block hit");
//     
//     }
// }
