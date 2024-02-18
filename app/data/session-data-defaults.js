/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {

'losCode': '01LX',
'losCreator': '01LX',
'losRef': 'ABX57382',
'losNotes': '15/03/22 0500HRS VEHICLE STOLEN AT GUNPOINT FROM HALFORDS, BRIXTON, SW9. SUSP M, WHITE, F508, SLIM, WEARING A BLACK HOODIE. CONSIDER FIREARMS SUPPORT. CONTACT PS JOHN DOE 02081237634 FORCE 01LX',
'losTime': '15/05/2023 09:45',
'blockRef': '39VV/3098/12',
'blockCode': '39VV',
'blockTime': '15/03/2022 08:07',
'resCode': '39VV/3098/12',
'actCode':'01LX',
'country' : '01LX',
'actRef': 'E94F9390DE3893',
'actNotes':'HIGH STOP CRIME FI IC1 M 32YRS Vehicle believed to contain 01/126A wanted for murder, consider armed. Contact OIC if sighted, if stopped detain all occupants and seize vehicle for forensics OIC DI DOE 02081237634',
'autoTextHidden':'HIGH STOP CRIME FI IC1 M 32YRS PNCID: 01/126A',
'actNotes1':'Vehicle believed to',
'actNotes2':'contain person wanted for murder, consider armed. If stopped',
'actNotes3':'detain occupants & seize vehicle for forensics OIC DI 02081237634',
'actTime': '17/07/2023 09:47',
'actIncidentFrom' : '17/07/2023',
'actIncidentTo' : '',
'reaRef' : 'X73P1238GE6179',
'reaCode' : '01LX',
'code' : '01LX',
'reaNotes' : 'Vehicle stopped and searched. Three males arrested in 01MP. One charged with PWITS, one charged with Assualt on Police. CRIS REF 22/9874561X',
'reaNotes1' : 'Vehicle stopped and searched. Three males arrested in 01MP. One',
'reaNotes2' : 'charged with PWITS, one charged with Assualt on Police',
'reaNotes3' : 'CRIS REF 22/9874561X',
'reaTime' : '07/08/2023 15:12',
'reaIncidentFrom' : '07/08/2023',
'reaIncidentTo' : ''



}
