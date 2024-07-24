// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Component, Node, AudioClip, macro, director, systemEvent, SystemEvent, input, Input, EventKeyboard, KeyCode } from 'cc';
const {ccclass, property} = _decorator;

import Player from "./Player";

@ccclass('World')
export default class CWorld extends Component {
    @property()
    WorldFallG: number = 0;    
    @property() 
    WorldWalkA: number = 0;
    @property(Player)
    player: Player = null;
    @property(Node)
    background: Node | null = null;
    
    @property(AudioClip)
    bgm: AudioClip | null = null;
    
    static G: number = 0;    
    static WalkA: number = 0; 
    
    private leftDown: boolean = false;
    private rightDown: boolean = false;
//    // LIFE-CYCLE CALLBACKS:
    onLoad () {
        console.log("world loading");
        CWorld.G = this.WorldFallG;
        CWorld.WalkA = this.WorldWalkA;
        //director.getPhysicsManager().enabled = true;
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
        //audioEngine.playMusic(this.bgm, true);
    }
    onKeyDown(event: EventKeyboard)
    {
        switch(event.keyCode)
        {
            case KeyCode.ARROW_LEFT:
            case KeyCode.KEY_A:
                this.leftDown = true;
                this.player.playerMove(-1);
                break;
            case KeyCode.ARROW_RIGHT:
            case KeyCode.KEY_D:
                this.rightDown = true;
                this.player.playerMove(1);
                break;
            case KeyCode.SPACE:
            case KeyCode.KEY_W:
            case KeyCode.BACKSPACE:
                this.player.playerJump("Normal");
                break;
            case KeyCode.KEY_P:
                // this.gameStart();
                director.pause();
                break;
            case KeyCode.KEY_O:
            //     this.gameOver();
                director.resume();
                break;
        }
    }
    onKeyUp(event: EventKeyboard)
    {
        switch(event.keyCode)
        {
            case KeyCode.ARROW_LEFT:
                this.leftDown = false;
                if(this.rightDown)
                    this.player.playerMove(1);
                else
                    this.player.playerMove(0);
                break;
            case KeyCode.ARROW_RIGHT:
                this.rightDown = false;
                if(this.leftDown)
                    this.player.playerMove(-1);
                else
                    this.player.playerMove(0);
                break;
        }
    }
    start () {
        //enable Collision System
        //director.getCollisionManager().enabled = true;
        //director.getCollisionManager().enabledDebugDraw = true;
        //director.getCollisionManager().enabledDrawBoundingBox = true;
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
// import Player from "./Player";
// 
// @ccclass
// export default class CWorld extends cc.Component {
// 
//     @property()
//     WorldFallG: number = 0;    
// 
//     @property() 
//     WorldWalkA: number = 0;
// 
//     @property(Player)
//     player: Player = null;
// 
//     @property(cc.Node)
//     background: cc.Node = null;
//     
//     @property(cc.AudioClip)
//     bgm: cc.AudioClip = null;
//     
//     static G: number = 0;    
//     static WalkA: number = 0; 
//     
//     private leftDown: boolean = false;
// 
//     private rightDown: boolean = false;
//     // LIFE-CYCLE CALLBACKS:
// 
//     onLoad () {
//         console.log("world loading");
//         CWorld.G = this.WorldFallG;    
//         CWorld.WalkA = this.WorldWalkA; 
//         cc.director.getPhysicsManager().enabled = true;
//         cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
//         cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
//         cc.audioEngine.playMusic(this.bgm, true);
//     }
// 
//     onKeyDown(event)
//     {
//         switch(event.keyCode)
//         {
//             case cc.macro.KEY.left:
//             case cc.macro.KEY.a:
//                 this.leftDown = true;
//                 this.player.playerMove(-1);
//                 break;
//             case cc.macro.KEY.right:
//             case cc.macro.KEY.d:
//                 this.rightDown = true;
//                 this.player.playerMove(1);
//                 break;
//             case cc.macro.KEY.w:
//             case cc.macro.KEY.up:
//             case cc.macro.KEY.space:
//                 this.player.playerJump("Normal");
//                 break;
//             case cc.macro.KEY.p:
//                 // this.gameStart();
//                 break;
//             // case cc.macro.KEY.d:
//             //     this.gameOver();
//             //     break;
//         }
//     }
// 
//     onKeyUp(event)
//     {
//         switch(event.keyCode)
//         {
//             case cc.macro.KEY.left:
//                 this.leftDown = false;
//                 if(this.rightDown)
//                     this.player.playerMove(1);
//                 else
//                     this.player.playerMove(0);
//                 break;
//             case cc.macro.KEY.right:
//                 this.rightDown = false;
//                 if(this.leftDown)
//                     this.player.playerMove(-1);
//                 else
//                     this.player.playerMove(0);
//                 break;
//         }
//     }
//     start () {
//         // enable Collision System
//         cc.director.getCollisionManager().enabled = true;
//         cc.director.getCollisionManager().enabledDebugDraw = true;
//         cc.director.getCollisionManager().enabledDrawBoundingBox = true;
//     }
// 
//     // update (dt) {}
// }
