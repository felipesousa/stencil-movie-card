import { Component, Prop, h } from '@stencil/core';

export interface IMovie {
  tags: Array<string>;
  title: string;
  description: string;
  picture: string;
}

@Component({
  tag: 'stencil-video-placeholder',
  styleUrl: 'stencil-video-placeholder.scss',
})
export class StencilVideoPlaceholderComponent {
  @Prop() movie: IMovie;

  render() {
    return (
      <article class="movie">
        <header
          class="movie-picture"
          style={{ backgroundImage: `url(https://i.ibb.co/FDGqCmM/papers-co-ag74-interstellar-wide-space-film-movie-art-33-iphone6-wallpaper.jpg)` }}
        >
        </header>
        <main class="content">
          <div class="mr-grid">
            <div class="col1">
              <h1>Interstellar</h1>
              <ul class="movie-gen">
                <li>PG-13  /</li>
                <li>2h 49min  /</li>
                <li>Adventure, Drama, Sci-Fi,</li>
              </ul>
            </div>
          </div>
          <div class="mr-grid summary-row">
            <div class="col2">
              <h5>SUMMARY</h5>
            </div>
          </div>
          <div class="mr-grid">
            <div class="col1">
              <p class="movie-description">A group of elderly people are giving interviews about having lived in a climate of crop blight and constant dust reminiscent of The Great 
              Depression of the 1930's. The first one seen is an elderly woman stating her father was a farmer, but did not start out that way. </p>
            </div>
          </div>
          <div class="mr-grid actors-row">
            <div class="col1">
              <p class="movie-actors">Matthew McConaughey, Anne Hathaway, Jessica Chastain</p>
            </div>
          </div>
          <footer class="mr-grid action-row">
            <div class="col2">
              <button class="watch-btn">
                <h3>WATCH TRAILER</h3>
              </button>
            </div>
          </footer>
        </main>
      </article>
    );
  }
}
