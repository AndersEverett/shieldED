# CR this looks more like a view test
feature 'homepage' do
  scenario 'has login form' do
    visit root_path
    expect(page).to have_content "Login"
  end
end
