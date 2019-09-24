import { newE2EPage } from '@stencil/core/testing';

describe('stencil-movie-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<stencil-movie-card></stencil-movie-card>');
    const element = await page.find('stencil-movie-card');
    expect(element).toHaveClass('hydrated');
  });
});
