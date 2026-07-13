import os


def test_project_structure():
    assert os.path.exists("README.md")
    assert os.path.exists("requirements.txt")
    assert os.path.exists("src")
    assert os.path.exists("notebooks")