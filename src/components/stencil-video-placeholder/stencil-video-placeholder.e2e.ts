import { newE2EPage } from '@stencil/core/testing';

describe('stencil-video-placeholder', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<stencil-video-placeholder></stencil-video-placeholder>');
    const element = await page.find('stencil-video-placeholder');
    expect(element).toHaveClass('hydrated');
  });
});
