'use strict';
module.exports.neeoCommands = function () {
  return {
    "POWER OFF":{"jsonrpc": "2.0", "method": "System.Shutdown", "id": 1},
    "POWER ON":{"special":"wol"}, 
    "PLAY":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "play"}, "id": 1},
    "PAUSE":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "pause"}, "id": 1},
    "STOP":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "stop"}, "id": 1},
    "SKIP BACKWARD":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "skipprevious"}, "id": 1},
    "SKIP FORWARD":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "skipnext"}, "id": 1},
    "FORWARD":{"jsonrpc": "2.0", "method": "Player.SetSpeed", "params": {"playerid":1, "speed":2}, "id":1},
    "PREVIOUS":{"jsonrpc": "2.0", "method": "Player.GoTo", "params": { "playerid":1, "to": "previous"}, "id":1},
    "NEXT":{"jsonrpc": "2.0", "method": "Player.GoTo", "params": { "playerid":1, "to": "next"}, "id":1},
    "REVERSE":{"jsonrpc": "2.0", "method": "Player.SetSpeed", "params": {"playerid":1, "speed":-2}, "id":1},
    "PLAY PAUSE TOGGLE":{"jsonrpc": "2.0", "method": "Input.PlayPause", "id": 1},
    "INFO":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "info"}, "id": 1},
    "CHANNEL UP":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "channelup"}, "id": 1},
    "CHANNEL DOWN":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "channeldown"}, "id": 1},
    "CHANNEL SEARCH":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "nextchannelgroup"}, "id": 1},
    "FAVORITE":{"jsonrpc":"2.0","id":1,"method":"GUI.ActivateWindow","params":{"window":"pvrosdchannels"}},
    "DIGIT 0":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "number0"}, "id": 1},
    "DIGIT 1":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "number1"}, "id": 1},
    "DIGIT 2":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "number2"}, "id": 1},
    "DIGIT 3":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "number3"}, "id": 1},
    "DIGIT 4":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "number4"}, "id": 1},
    "DIGIT 5":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "number5"}, "id": 1},
    "DIGIT 6":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "number6"}, "id": 1},
    "DIGIT 7":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "number7"}, "id": 1},
    "DIGIT 8":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "number8"}, "id": 1},
    "DIGIT 9":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "number9"}, "id": 1},
    "DIGIT SEPARATOR":{"jsonrpc": "2.0", "method": "Input.xxxx", "id": 1},
    "BACK":{"jsonrpc": "2.0", "method": "Input.Back", "id": 1},
    "CURSOR DOWN":{"jsonrpc": "2.0", "method": "Input.down", "id": 1},
    "CURSOR LEFT":{"jsonrpc": "2.0", "method": "Input.Left", "id": 1},
    "CURSOR RIGHT":{"jsonrpc": "2.0", "method": "Input.right", "id": 1},
    "CURSOR UP":{"jsonrpc": "2.0", "method": "Input.up", "id": 1},
    "ENTER":{"jsonrpc": "2.0", "method": "Input.Select", "id": 1},
    "EXIT":{"jsonrpc": "2.0", "method": "Input.back", "id": 1},
    "HOME":{"jsonrpc": "2.0", "method": "Input.menu", "id": 1},
    "MENU":{"jsonrpc": "2.0", "method": "Input.ContextMenu", "id": 1},
    "VOLUME UP":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "volumeup"}, "id": 1},
    "VOLUME DOWN":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "volumedown"}, "id": 1},
    "MUTE TOGGLE":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "mute"}, "id": 1},
    "Page Up":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "pageup"}, "id": 1},
    
    "Scan Video Library":{"jsonrpc": "2.0", "method": "VideoLibrary.Scan", "id": 1},
    "Scan Audio Library":{"jsonrpc": "2.0", "method": "AudioLibrary.Scan", "id": 1},
    "Page Down":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "pagedown"}, "id": 1},
    "Parent Dir":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "parentdir"}, "id": 1},
    "Parent Folder":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "parentfolder"}, "id": 1},
    "Previous Menu":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "previousmenu"}, "id": 1},
    "Fullscreen":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "fullscreen"}, "id": 1},
    "Aspectratio":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "aspectratio"}, "id": 1},
    "OSD":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "osd"}, "id": 1},
    "Show Subtitles":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "showsubtitles"}, "id": 1},
    "Next Subtitle":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "nextsubtitle"}, "id": 1},
    "Cycle Subtitle":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "cyclesubtitle"}, "id": 1},
    "Player Debug":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "playerdebug"}, "id": 1},
    "Codec Info":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "codecinfo"}, "id": 1},
    "Player Processinfo":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "playerprocessinfo"}, "id": 1},
    "Next Picture":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "nextpicture"}, "id": 1},
    "Previous Picture":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "previouspicture"}, "id": 1},
    "Zoomout":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "zoomout"}, "id": 1},
    "Zoomin":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "zoomin"}, "id": 1},
    "Playlist":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "playlist"}, "id": 1},
    "Queue":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "queue"}, "id": 1},
    "Zoom normal":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "zoomnormal"}, "id": 1},
    "Zoomlevel 1":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "zoomlevel1"}, "id": 1},
    "Zoomlevel 2":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "zoomlevel2"}, "id": 1},
    "Zoomlevel 3":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "zoomlevel3"}, "id": 1},
    "Zoomlevel 4":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "zoomlevel4"}, "id": 1},
    "Zoomlevel 5":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "zoomlevel5"}, "id": 1},
    "Zoomlevel 6":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "zoomlevel6"}, "id": 1},
    "Zoomlevel 7":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "zoomlevel7"}, "id": 1},
    "Zoomlevel 8":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "zoomlevel8"}, "id": 1},
    "Zoomlevel 9":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "zoomlevel9"}, "id": 1},
    "Next Calibration":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "nextcalibration"}, "id": 1},
    "Reset Calibration":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "resetcalibration"}, "id": 1},
    "Analog Move":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "analogmove"}, "id": 1},
    "Analog Move X":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "analogmovex"}, "id": 1},
    "Analog Move Y":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "analogmovey"}, "id": 1},
    "Rotate":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "rotate"}, "id": 1},
    "Rotate CCW":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "rotateccw"}, "id": 1},
    "Subtitledelay -":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "subtitledelayminus"}, "id": 1},
    "Subtitledelay":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "subtitledelay"}, "id": 1},
    "Subtitledelay +":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "subtitledelayplus"}, "id": 1},
    "Audiodelay -":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "audiodelayminus"}, "id": 1},
    "Audiodelay":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "audiodelay"}, "id": 1},
    "Audiodelay +":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "audiodelayplus"}, "id": 1},
    "Subtitle shift up":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "subtitleshiftup"}, "id": 1},
    "Subtitle shift down":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "subtitleshiftdown"}, "id": 1},
    "Subtitle align":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "subtitlealign"}, "id": 1},
    "Audio next language":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "audionextlanguage"}, "id": 1},
    "Vertical shift up":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "verticalshiftup"}, "id": 1},
    "Vertical shift down":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "verticalshiftdown"}, "id": 1},
    "Next resolution":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "nextresolution"}, "id": 1},
    "Audio toggle digita":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "audiotoggledigita"}, "id": 1},
    "Switch player":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "switchplayer"}, "id": 1},
    "Delete":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "delete"}, "id": 1},
    "Copy":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "copy"}, "id": 1},
    "Move":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "move"}, "id": 1},
    "Screenshot":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "screenshot"}, "id": 1},
    "Rename":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "rename"}, "id": 1},
    "Toggle watched":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "togglewatched"}, "id": 1},
    "Scan item":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "scanitem"}, "id": 1},
    "Reload keymaps":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "reloadkeymaps"}, "id": 1},
    "Scrollup":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "scrollup"}, "id": 1},
    "Scrolldown":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "scrolldown"}, "id": 1},
    "Analog fastforward":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "analogfastforward"}, "id": 1},
    "Analog rewind":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "analogrewind"}, "id": 1},
    "Move item up":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "moveitemup"}, "id": 1},
    "Move item down":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "moveitemdown"}, "id": 1},
    "Contextmenu":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "contextmenu"}, "id": 1},
    "Shift":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "shift"}, "id": 1},
    "Symbols":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "symbols"}, "id": 1},
    "Cursor left":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "cursorleft"}, "id": 1},
    "Cursor right":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "cursorright"}, "id": 1},
    "Showtime":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "showtime"}, "id": 1},
    "Analog seek forward":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "analogseekforward"}, "id": 1},
    "Analog seek back":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "analogseekback"}, "id": 1},
    "Show preset":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "showpreset"}, "id": 1},
    "Next preset":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "nextpreset"}, "id": 1},
    "Previous preset":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "previouspreset"}, "id": 1},
    "Lock preset":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "lockpreset"}, "id": 1},
    "Random preset":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "randompreset"}, "id": 1},
    "Increase vis rating":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "increasevisrating"}, "id": 1},
    "Decrease vis rating":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "decreasevisrating"}, "id": 1},
    "Show video menu":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "showvideomenu"}, "id": 1},
    "Increase rating":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "increaserating"}, "id": 1},
    "Decrease rating":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "decreaserating"}, "id": 1},
    "Set rating":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "setrating"}, "id": 1},
    "Toggle fullscreen":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "togglefullscreen"}, "id": 1},
    "Next letter":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "nextletter"}, "id": 1},
    "Prev letter":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "prevletter"}, "id": 1},
    "jump sms 2":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "jumpsms2"}, "id": 1},
    "jump sms 3":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "jumpsms3"}, "id": 1},
    "jump sms 4":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "jumpsms4"}, "id": 1},
    "jump sms 5":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "jumpsms5"}, "id": 1},
    "jump sms 6":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "jumpsms6"}, "id": 1},
    "jump sms 7":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "jumpsms7"}, "id": 1},
    "jump sms 8":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "jumpsms8"}, "id": 1},
    "jump sms 9":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "jumpsms9"}, "id": 1},
    "Filter":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "filter"}, "id": 1},
    "Filter clear":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "filterclear"}, "id": 1},
    "filter sms 2":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "filtersms2"}, "id": 1},
    "filter sms 3":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "filtersms3"}, "id": 1},
    "filter sms 4":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "filtersms4"}, "id": 1},
    "filter sms 5":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "filtersms5"}, "id": 1},
    "filter sms 6":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "filtersms6"}, "id": 1},
    "filter sms 7":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "filtersms7"}, "id": 1},
    "filter sms 8":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "filtersms8"}, "id": 1},
    "filter sms 9":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "filtersms9"}, "id": 1},
    "Firstpage":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "firstpage"}, "id": 1},
    "Lastpage":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "lastpage"}, "id": 1},
    "GUI Profile":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "guiprofile"}, "id": 1},
    "Red":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "red"}, "id": 1},
    "Green":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "green"}, "id": 1},
    "Yellow":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "yellow"}, "id": 1},
    "Blue":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "blue"}, "id": 1},
    "Increase par":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "increasepar"}, "id": 1},
    "Decrease par":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "decreasepar"}, "id": 1},
    "Vol amp up":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "volampup"}, "id": 1},
    "Vol amp down":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "volampdown"}, "id": 1},
    "Volume amplification":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "volumeamplification"}, "id": 1},
    "Create bookmark":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "createbookmark"}, "id": 1},
    "Create episode bookmark":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "createepisodebookmark"}, "id": 1},
    "Settings reset":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "settingsreset"}, "id": 1},
    "Settings level change":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "settingslevelchange"}, "id": 1},
    "Stereo mode":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "stereomode"}, "id": 1},
    "Next stereo mode":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "nextstereomode"}, "id": 1},
    "Previous stereo mode":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "previousstereomode"}, "id": 1},
    "Toggle stereo mode":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "togglestereomode"}, "id": 1},
    "Stereo mode to mono":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "stereomodetomono"}, "id": 1},
    "Previous channel group":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "previouschannelgroup"}, "id": 1},
    "Next channel group":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "nextchannelgroup"}, "id": 1},
    "Play pvr":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "playpvr"}, "id": 1},
    "Play pvr tv":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "playpvrtv"}, "id": 1},
    "Play pvr radio":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "playpvrradio"}, "id": 1},
    "Record":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "record"}, "id": 1},
    "Toggle comm skip":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "togglecommskip"}, "id": 1},
    "Show timerrule":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "showtimerrule"}, "id": 1},
    "Leftclick":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "leftclick"}, "id": 1},
    "Rightclick":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "rightclick"}, "id": 1},
    "Middleclick":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "middleclick"}, "id": 1},
    "Doubleclick":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "doubleclick"}, "id": 1},
    "Longclick":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "longclick"}, "id": 1},
    "Wheelup":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "wheelup"}, "id": 1},
    "Wheeldown":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "wheeldown"}, "id": 1},
    "Mousedrag":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "mousedrag"}, "id": 1},
    "Mousemove":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "mousemove"}, "id": 1},
    "Tap":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "tap"}, "id": 1},
    "Longpress":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "longpress"}, "id": 1},
    "Pangesture":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "pangesture"}, "id": 1},
    "Zoomgesture":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "zoomgesture"}, "id": 1},
    "Rotategesture":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "rotategesture"}, "id": 1},
    "Swipe left":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "swipeleft"}, "id": 1},
    "Swipe right":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "swiperight"}, "id": 1},
    "Swipe up":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "swipeup"}, "id": 1},
    "Swipe down":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "swipedown"}, "id": 1},
    "Error":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "error"}, "id": 1},
    "Noop":{"jsonrpc": "2.0", "method": "Input.ExecuteAction","params":{ "action": "noop"}, "id": 1}
  }
}
