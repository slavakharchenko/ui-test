import { test } from '../fixtures';
import { searchQuery, searchQueryLink } from '../data';
import { log } from '../helpers';

test.describe('Google3', () => {
  test('search playwright', async ({ mainPage, searchPage }) => {
    log.info('INFO, suite 3')
    // Arrange
    await mainPage.goto();

    // Act
    await mainPage.search(searchQuery.playwright);

    // Assert
    await searchPage.checkFirstResultLink(searchQueryLink.playwright);
  });

  test('search cypress', async ({ mainPage, searchPage }) => {
    log.warn('WARN, suite 3')
    // Arrange
    await mainPage.goto();

    // Act
    await mainPage.search(searchQuery.cypress);

    // Assert
    await searchPage.checkFirstResultLink(searchQueryLink.cypress);
  });
});