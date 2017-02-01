module ApplicationHelper
  include ERB::Util

  def ugly_lyrics(lyrics)
    formatted_lyrics = ""
    lyrics.each_line do |line|
      formatted_lyrics << "&#9835; #{h(line)}"
    end

    "<pre>#{formatted_lyrics}</pre>".html_safe
  end
end
