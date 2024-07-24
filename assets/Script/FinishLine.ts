// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Component, Label, AudioClip, BoxCollider2D, Contact2DType, director } from 'cc';
const {ccclass, property} = _decorator;

@ccclass('FinishLine')
export default class NewClass extends Component {
    @property(Label)
    label: Label | null = null;
    @property
    text: string = 'hello';
    @property(AudioClip)
    yahooAudio: AudioClip | null = null;
//    // LIFE-CYCLE CALLBACKS:
    onLoad () {
        let collier = this.node.getComponent(BoxCollider2D);
        if(collier){
            collier.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
    }

    onDestroy(){
        let collier = this.node.getComponent(BoxCollider2D);
        if(collier){
            collier.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
    }

    start () {

    }
//    // update (dt) {}
    onBeginContact(contact, self, other){
//        // console.log("contact!");
//        // console.log("player hit "+other.node.name);
        // if(other.node.name == "Player"){
        // cc.audioEngine.playEffect(this.yahooAudio, false);

        // let user = firebase.auth().currentUser;
        // if(user){
        // let data = other.node.getComponent("Player");
        // firebase.database().ref('users/'+user.uid.toString()+'/'+this.text)
        // .set({
        // score: data.score,
        // lives: data.lives,
        // });
        // }
//            // console.log("finish");
        if(this.text == "stage1"){
            director.loadScene("Start2");
        }
        else if(this.text == "stage2"){
            director.loadScene("GameCompleted");
        }
        
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
//     @property(cc.AudioClip)
//     yahooAudio: cc.AudioClip = null;
// 
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
//         // console.log("contact!");
//         // console.log("player hit "+other.node.name);
//         if(other.node.name == "Player"){
//             cc.audioEngine.playEffect(this.yahooAudio, false);
// 
//             let user = firebase.auth().currentUser;
//             if(user){
//                 let data = other.node.getComponent("Player");
//                 firebase.database().ref('users/'+user.uid.toString()+'/'+this.text)
//                 .set({
//                     score: data.score,
//                     lives: data.lives,
//                 });
//             }
//             // console.log("finish");
//             if(this.text == "stage1")
//                 cc.director.loadScene("Start2");
//             else if(this.text == "stage2")
//                 cc.director.loadScene("GameCompleted");
//         }
//     }
// }
