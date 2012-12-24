class App.Track extends Spine.Model
  @configure 'Track', 'uri', 'playlist_id', 'soundcloud_id', 'soundcloud_title'
  @extend Spine.Model.Ajax

  @belongsTo 'playlist', 'App.Playlist'

  validate: ->
    "URL must be from SoundCloud" unless /soundcloud/.test @uri