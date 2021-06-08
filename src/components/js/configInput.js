export default {
	name: 'configInput',
	props: [
		'template',
		'configName',
		'holder',
		'translate'
	],
	computed: {
		configValue: {
			get: function () {
				return this.holder[this.configName]
			},
			set: function (value) {
				this.$set(this.holder, this.configName, value)
				return true
			}
		}
	},
	methods: {
		hex2rgba() {
			let hex = this.holder['background']
			let alpha = this.holder['background-opacity']
			const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
			this.holder['rgba'] = `rgba(${r}, ${g}, ${b}, ${alpha})`
			console.log('new color ' + this.holder['rgba'])
		},
		missing: function() {
			return this.template['obligatory'] && !this.configValue
		},
		valid: function (){
			if(this.template['dataType'] === "string" || this.template['dataType'] === "longstring") {
				if (this.configValue === undefined) {
					return false
				}
				let newest = this.configValue.slice(-1)
				if ('noSpace' in this.template && this.template['noSpace'] && this.configValue !== undefined && newest === " ") {
					this.configValue = this.configValue.slice(0, -1)
				}
			}
			return true
		}
	}
}
