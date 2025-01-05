import { LightOffCommand } from "./commands/LightOffCommand";
import { LightOnCommand } from "./commands/LightOnCommand";
import { StereoOffCommand } from "./commands/StereoOffCommand";
import { StereoOnWithCDCommand } from "./commands/StereoOnWithCDCommand";
import { Light } from "./devices/Light";
import { Stereo } from "./devices/Stereo";
import { RemoteControl } from "./remote/RemoteControl";

const remoteControl = new RemoteControl();

const livingRoomLight = new Light("Living Room");
const kitchenLight = new Light("Kitchen");
const stereo = new Stereo("Living Room");

const livingRoomLightOn = new LightOnCommand(livingRoomLight);
const livingRoomLightOff = new LightOffCommand(livingRoomLight);
const kitchenLightOn = new LightOnCommand(kitchenLight);
const kitchenLightOff = new LightOffCommand(kitchenLight);

const stereoOnWithCD = new StereoOnWithCDCommand(stereo);
const stereoOff = new StereoOffCommand(stereo);

remoteControl.setCommand(0, livingRoomLightOn, livingRoomLightOff);
remoteControl.setCommand(1, kitchenLightOn, kitchenLightOff);
remoteControl.setCommand(2, stereoOnWithCD, stereoOff);

document?.getElementById("log")?.appendChild(remoteControl.renderAsHTML());

function logCommand(message: string) {
    const logElement = document.getElementById("log");
    const listItem = document.createElement("li");
    listItem.textContent = message;
    logElement?.appendChild(listItem);
}

remoteControl.onButtonWasPressed(0);
logCommand("Living Room Light turned ON");
remoteControl.offButtonWasPressed(0);
logCommand("Living Room Light turned OFF");

remoteControl.onButtonWasPressed(1);
logCommand("Kitchen Light turned ON");
remoteControl.offButtonWasPressed(1);
logCommand("Kitchen Light turned OFF");

remoteControl.onButtonWasPressed(2);
logCommand("Stereo turned ON with CD");
remoteControl.offButtonWasPressed(2);
logCommand("Stereo turned OFF");
