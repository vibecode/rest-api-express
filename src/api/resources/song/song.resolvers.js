import { Song } from './song.model'

const getSong = (_, { id }, { user }) => {
  return Song.findById(id).exec()
}

const allSongs = () => {
  Song.find({}).exec()
}

const newSong = (_, { input }) => {
  return Song.create(input)
}

const updateSong = (_, { input }) => {
  const { id, ...update } = input

  return Song.findByIdAndUpdate(id, update, { new: true })
}

export const songResolvers = {
  Query: {
    allSongs,
    Song: getSong
  },
  Mutation: {
    newSong,
    updateSong
  }
}
