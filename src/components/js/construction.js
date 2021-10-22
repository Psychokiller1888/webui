import axios from 'axios'

export default {
	name:    'construction',
	data:    function () {
		return {
			rotationDelta: 0
		}
	},
	props:   [
		'data',
		'myHome'
	],
	methods: {
		computeCustomStyle: function () {
			return this.myHome.moveableItem.computeMyHomeCustomStyle(
				this.data,
				`background: url('http://${this.$store.state.settings['aliceIp']}:${this.$store.state.settings['apiPort']}/api/v1.0.1/myHome/constructions/${this.data.settings['t'] || 'construction-200'}.png') no-repeat; background-size: 100% 100%;`
			)
		},
		save:               function () {
			const data = {
				id:             this.data.id,
				parentLocation: this.data.parentLocation,
				settings:       this.data.settings
			}

			axios({
				method:  'PATCH',
				url:     `/myHome/constructions/${this.data.id}/`,
				data:    data,
				headers: {
					'auth':         this.$store.getters.apiToken,
					'content-type': 'application/json'
				}
			}).then()
		},
		handleClick:        function (event) {
			event.stopPropagation()
			this.myHome.removeDroppable()
			this.myHome.activeConstructionTile = ''

			if (this.myHome.toolsState.placingConstructions) {
				this.myHome.setMoveable(event.target, this)
				this.myHome.moveableItem.setBoundaries(this.$el, 0)
				const constructions = Array.from(document.querySelectorAll('.construction')).filter((construction) => {
					const conId = parseInt(construction.id.substring(4))
					return !(conId === this.data.id);
				})
				this.myHome.moveableItem.setGuidelines(constructions)
			}
		},
		deleteMe:           function (event) {
			event.stopPropagation()
			axios({
				method:  'DELETE',
				url:     `/myHome/constructions/${this.data.id}/`,
				headers: {'auth': this.$store.getters.apiToken}
			}).then(response => {
				if ('success' in response.data && response.data.success) {
					this.$delete(this.$store.state.constructions, this.data.id)
				}
			})
		}
	}
}
