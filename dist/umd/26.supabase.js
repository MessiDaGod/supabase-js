'use strict'
;(self.webpackChunksupabase = self.webpackChunksupabase || []).push([
  [26],
  {
    26: (e) => {
      e.exports = function () {
        throw new Error(
          'ws does not work in the browser. Browser clients must use the native WebSocket object'
        )
      }
    },
  },
])
