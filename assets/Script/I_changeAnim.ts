import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

export interface I_changeAnim  {
    changeAnim(animName: string, OncompleteAnim):void;
}


