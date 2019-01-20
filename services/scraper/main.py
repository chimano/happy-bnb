from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import re

id_re = re.compile(r'listing-(\d+)')
rating_re = re.compile(r'Rated ([0-9.]+) out of 5')
location_re = re.compile(r'&center=([\-0-9.]+),([\-0-9.]+)&')
SOURCE = 'https://www.airbnb.ca/'
DEFAULT = SOURCE + 's/Montreal--QC/homes?refinement_paths%5B%5D=%2Fhomes&query=Montreal%2C%20QC'
ROOM_FORMAT = SOURCE + 'rooms/{id}?location=Montreal%2C%20QC'

data = {}

if __name__ == '__main__':
    options = Options()
    options.headless = True
    driver = webdriver.Chrome(chrome_options=options)
    driver.set_window_size(800, 800)
    driver.implicitly_wait(3)
    next_page_number = 2
    next_page_url = DEFAULT

    while next_page_url:
        print('Page {}'.format(next_page_number - 1))
        driver.get(next_page_url)
        page_li = driver.find_elements_by_css_selector("li[data-id='page-{}']".format(next_page_number))
        next_page_url = page_li[0].find_element_by_tag_name('a').get_attribute('href') if page_li else ''
        listings = driver.find_elements_by_xpath("//*[starts-with(@id, 'listing-')]")
        ids = set(id_re.match(listing.get_attribute('id')).group(1) for listing in listings
                  if not listing.find_elements_by_css_selector("span[data-veloute='select-badge']"))
        print('Found {} ids'.format(len(ids)))
        for id_ in ids:
            driver.get(ROOM_FORMAT.format(id=id_))
            match = rating_re.search(driver.page_source)
            rating = match.group(1) if match else ''
            location = location_re.search(driver.find_element_by_id('neighborhood').find_element_by_css_selector('img')
                                          .get_attribute('src'))
            data[id_] = (rating, location.group(1), location.group(2))

        next_page_number = next_page_number + 1

    with open('results.txt', 'w') as file:
        file.write(str(data))
    driver.close()
