import * as C from '@/utils/constants'
import axios from 'axios'

export default {
	name: 'pa-header',
	data() {
		return {
			notifications: {},
			notificationsDisplayToggle: false,
			title: '',
			unwatch: {},
			resources: {
				cpu: 0,
				ram: 0,
				swp: 0
			}
		}
	},
	created: function() {
		let self = this
		this.unwatch = this.$store.watch(
			function(state) {
				return state.mqttMessage
			},
			function(msg) {
				let payload =JSON.parse(msg.payloadString)
				if (msg.topic === C.RESOURCE_USAGE_TOPIC) {
					self.resources = payload
				} else if (msg.topic === C.UI_NOTIFICATION_TOPIC) {
					self.notifications[payload['id']] = payload
				}
			}
		)
	},
	beforeDestroy: function () {
		this.$store.state.mqtt.unsubscribe(C.RESOURCE_USAGE_TOPIC)
		this.unwatch()
	},
	watch: {
		$route: {
			immediate: true,
			handler(to) {
				this.title = this.$t(to.meta.title) || 'Home'
				document.title = `Project Alice - ${this.title.charAt(0).toUpperCase() + this.title.slice(1)}`
			}
		}
	},
	methods: {
		dismissNotification: function(id) {
			this.$delete(this.notifications, id)
			if (Object.keys(this.notifications).length === 0) {
				this.notificationsDisplayToggle = false
			}
			axios({
				method: 'PATCH',
				url: `/utils/markNotificationRead/${id}/`,
				headers: {'auth': this.$store.getters.apiToken}
			}).then()
		}
	}
}

