import { Pager } from './pager';
describe('Pager', function () {
  describe('constructor', function () {
    test('throws error if missing totalItems', function () {
      // @ts-ignore
      expect(function () {
        return new Pager();
      }).toThrow();
    });
    test('throws error if missing itemsPerPage', function () {
      // @ts-ignore
      expect(function () {
        return new Pager(10);
      }).toThrow();
    });
    test('throws error if non-number initialPageIndex', function () {
      // @ts-ignore
      expect(function () {
        return new Pager(10, 3, 'invalid argument');
      }).toThrow();
    });
  });
  describe('methods', function () {
    var totalItems = 10;
    var itemsPerPage = 3;
    var initialPageIndex = 1; // Initialising this to a Pager straight away keep TS happy.

    var pager = new Pager(totalItems, itemsPerPage, initialPageIndex);
    beforeEach(function () {
      pager = new Pager(totalItems, itemsPerPage, initialPageIndex);
    });
    describe('getTotalPages', function () {
      test('returns total pages', function () {
        expect(pager.getTotalPages()).toBe(4);
      });
    });
    describe('getCurrentPageIndex', function () {
      test('returns initial page index', function () {
        expect(pager.getCurrentPageIndex()).toBe(initialPageIndex);
      });
    });
    describe('isPageable', function () {
      test('returns true when there are pages', function () {
        expect(pager.isPageable()).toBe(true);
      });
      test('returns false when there no pages', function () {
        pager.setTotalItems(0);
        expect(pager.isPageable()).toBe(false);
      });
    });
    describe('getFirstItemIndex', function () {
      test('returns first item index', function () {
        expect(pager.getFirstItemIndex()).toBe(3);
      });
      test('defaults to -1 when there are no items', function () {
        pager.setTotalItems(0);
        expect(pager.getFirstItemIndex()).toBe(-1);
      });
    });
    describe('getLastItemIndex', function () {
      test('returns last item index', function () {
        expect(pager.getLastItemIndex()).toBe(5);
      });
      test('defaults to -1 when there are no items', function () {
        pager.setTotalItems(0);
        expect(pager.getLastItemIndex()).toBe(-1);
      });
    });
    describe('hasNextPage', function () {
      test('returns true', function () {
        expect(pager.hasNextPage()).toBe(true);
      });
      test('returns false', function () {
        pager.goToPageIndex(3);
        expect(pager.hasNextPage()).toBe(false);
      });
    });
    describe('hasPreviousPage', function () {
      test('returns true', function () {
        expect(pager.hasPreviousPage()).toBe(true);
      });
      test('returns false', function () {
        pager.goToPageIndex(0);
        expect(pager.hasPreviousPage()).toBe(false);
      });
    });
    describe('goToNextPage', function () {
      test('goes to next page', function () {
        pager.goToNextPage();
        expect(pager.getCurrentPageIndex()).toBe(2);
      });
      test('stops at last page', function () {
        pager.goToNextPage();
        pager.goToNextPage();
        pager.goToNextPage();
        pager.goToNextPage();
        expect(pager.getCurrentPageIndex()).toBe(3);
      });
    });
    describe('goToPreviousPage', function () {
      test('goes to previous page', function () {
        pager.goToPreviousPage();
        expect(pager.getCurrentPageIndex()).toBe(0);
      });
      test('stops at first page', function () {
        pager.goToPreviousPage();
        pager.goToPreviousPage();
        expect(pager.getCurrentPageIndex()).toBe(0);
      });
    });
    describe('goToPageIndex', function () {
      test('goes to page index', function () {
        pager.goToPageIndex(0);
        expect(pager.getCurrentPageIndex()).toBe(0);
      });
    });
    describe('setTotalItems', function () {
      test('updates total pages', function () {
        pager.setTotalItems(20);
        expect(pager.getTotalPages()).toBe(7);
      });
      test('updates current page', function () {
        pager.setTotalItems(2);
        expect(pager.getCurrentPageIndex()).toBe(0);
      });
    });
    describe('setItemsPerPage', function () {
      test('updates total pages', function () {
        pager.setItemsPerPage(1);
        expect(pager.getTotalPages()).toBe(totalItems);
      });
      test('updates last item index', function () {
        pager.setItemsPerPage(2);
        expect(pager.getLastItemIndex()).toBe(3);
      });
      test("doesn't update current page", function () {
        pager.setItemsPerPage(2);
        expect(pager.getCurrentPageIndex()).toBe(initialPageIndex);
      });
    });
  });
  describe('behavior', function () {
    describe('when there are no items', function () {// TODO
    });
  });
});