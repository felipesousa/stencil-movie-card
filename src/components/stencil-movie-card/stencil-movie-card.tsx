import { Component, Prop, h } from '@stencil/core';

export interface IMovie {
  title: string;
  description: string;
  picture: string;
  duration: string;
  tags: Array<string>;
  actors: Array<string>;
  trailerUrl: string;
}

@Component({
  tag: 'stencil-movie-card',
  styleUrl: 'stencil-movie-card.scss',
  shadow: true,
})
export class StencilVideoPlaceholderComponent {
  @Prop() movie: IMovie;

  private redirect = url => window.location.replace(url);

  render() {
    return (
      <article class="movie">
        <header
          class="movie-picture"
          style={{ backgroundImage: `url(${this.movie.picture})` }}
        >
        </header>
        <main class="content">
          <section class="mr-grid">
            <div class="col1">
              <h1>{this.movie.title}</h1>
              <ul class="movie-gen">
                <li>{this.movie.duration} /</li>
                <li>
                  {
                    this.movie.tags.map((tag, key) => (
                      <span id={key.toString()}>
                        {tag}{this.movie.tags.length - 1 > key && ', '}
                      </span>
                    ))
                  }
                </li>
              </ul>
            </div>
          </section>
          <section class="mr-grid summary-row">
            <div class="col2">
              <h5>SUMMARY</h5>
            </div>
          </section>
          <section class="mr-grid">
            <div class="col1">
              <p class="movie-description">{this.movie.description}</p>
            </div>
          </section>
          <section class="mr-grid actors-row">
            <div class="col1">
              <p class="movie-actors">
                {
                  this.movie.actors.map((actor, key) => (
                    <span id={key.toString()}>
                      {actor}{this.movie.actors.length - 1 > key && ', '}
                    </span>
                  ))
                }
              </p>
            </div>
          </section>
          <footer class="mr-grid action-row">
            <div class="col2">
              <button class="watch-btn" onClick={() => this.redirect(this.movie.trailerUrl)}>
                <h3>WATCH TRAILER</h3>
              </button>
            </div>
          </footer>
        </main>
      </article>
    );
  }
}
