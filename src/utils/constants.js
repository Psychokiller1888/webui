export const RESOURCE_USAGE_TOPIC = 'projectalice/devices/resourceUsage'
export const CORE_HEARTBEAT_TOPIC = 'projectalice/devices/coreHeartbeat'
export const DEVICE_HEARTBEAT_TOPIC = 'projectalice/devices/heartbeat'
export const DEVICE_UPDATED_TOPIC = 'projectalice/devices/updated'
export const DEVICE_DELETED_TOPIC = 'projectalice/devices/deleted'
export const CORE_RECONNECTION_TOPIC = 'projectalice/devices/coreReconnection'
export const CORE_DISCONNECTION_TOPIC = 'projectalice/devices/coreDisconnection'

export const ALICE_WATCH_TOPIC = 'projectalice/logging/alicewatch'
export const SYSLOG_TOPIC = 'projectalice/logging/syslog'

export const SKILL_INSTALLED_TOPIC = 'projectalice/skills/installed'
export const SKILL_UPDATING_TOPIC = 'projectalice/skills/updating'
export const SKILL_UPDATED_TOPIC = 'projectalice/skills/updated'
export const SKILL_DELETED_TOPIC = 'projectalice/skills/deleted'

export const UI_NOTIFICATION_TOPIC = 'projectalice/notifications/ui/notification'


export const SAY_TOPIC = 'hermes/tts/say'
export const NLU_QUERY_TOPIC = 'hermes/nlu/query'
export const SESSION_ENDED_TOPIC = 'hermes/dialogueManager/sessionEnded'
export const SESSION_STARTED_TOPIC = 'hermes/dialogueManager/sessionStarted'
export const HOTWORD_TOPIC = 'hermes/hotword/s/detected'
export const ASR_PART_TOPIC = 'hermes/asr/partialTextCaptured'
export const ASR_TOPIC = 'hermes/asr/textCaptured'
export const PLAY_BYTES_TOPIC = 'hermes/audioServer/{}/playBytes/#'
export const AUDIO_FRAME_TOPIC = 'hermes/audioServer/{}/audioFrame'
