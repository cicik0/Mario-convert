// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Button, Component, director, find, Label } from 'cc';
const {ccclass, property} = _decorator;

@ccclass('StageSelect')
export default class NewClass extends Component {
    @property(Label)
    label: Label | null = null;
    @property
    text: string = 'hello';
   // LIFE-CYCLE CALLBACKS:
   // onLoad () {}
    start () {
       // console.log("stage select");
        let btn1 = new Component.EventHandler();
        btn1.target = this.node;
        btn1.component = "StageSelect";
        btn1.handler = "loadStage1";
       // this.Button.getComponent(cc.Button).clickEvents.push(btn1);
        find("Canvas/Stage1").getComponent(Button).clickEvents.push(btn1);

        let btn2 = new Component.EventHandler();
        btn2.target = this.node;
        btn2.component = "StageSelect";
        btn2.handler = "loadStage2";
       // this.Button.getComponent(cc.Button).clickEvents.push(btn2);
        find("Canvas/Stage2").getComponent(Button).clickEvents.push(btn2);

    }
    loadStage1(){
        director.loadScene("Start1");
    }
    loadStage2(){
        director.loadScene("Start2");
    }
   // update (dt) {}
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
// 
//     // LIFE-CYCLE CALLBACKS:
// 
//     // onLoad () {}
// 
//     start () {
//         // console.log("stage select");
//         let btn1 = new cc.Component.EventHandler();
//         btn1.target = this.node;
//         btn1.component = "StageSelect";
//         btn1.handler = "loadStage1";
//         // this.Button.getComponent(cc.Button).clickEvents.push(btn1);
//         cc.find("Canvas/Stage1").getComponent(cc.Button).clickEvents.push(btn1);
// 
//         let btn2 = new cc.Component.EventHandler();
//         btn2.target = this.node;
//         btn2.component = "StageSelect";
//         btn2.handler = "loadStage2";
//         // this.Button.getComponent(cc.Button).clickEvents.push(btn2);
//         cc.find("Canvas/Stage2").getComponent(cc.Button).clickEvents.push(btn2);
//         
//     }
// 
//     loadStage1(){
//         cc.director.loadScene("Start1");
//     }
// 
//     loadStage2(){
//         cc.director.loadScene("Start2");
//     }
// 
//     // update (dt) {}
// }
